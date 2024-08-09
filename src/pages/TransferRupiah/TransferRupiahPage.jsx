// TransferRupiahPage.js
import { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { Layout } from "../layout";
import { CardTransaksi } from "../../assets/components/Cards/CardTransaksi";
import { TransferSearch } from "../../assets/components/transferComponents/TransferSearch";
import { TambahRekening } from "../../assets/components/transferComponents/TambahRekening";
import { useGetDataTransaksi } from '../../services/transfer-rupiah/get-data-transaksi';
import { useAddFavorite } from '../../services/transfer-rupiah/add-favorite-transaksi';
import { BreadcrumbsComponent } from '../../assets/components/Breadcrumbs/Breadcrumb';


export const TransferRupiahPage = () => {
    // const [destinationData, setDestinationData] = useState(null);
    const [destinationData, setDestinationData] = useState({
        favorites: [],
        others: []
    });


    //fetching api 
    const { data: dataTransaksi } = useGetDataTransaksi();

    const { mutate: updateFavorite } = useAddFavorite();

    const handleToggleFavorite = (id, currentFavoriteStatus) => {
        const newFavoriteStatus = !currentFavoriteStatus;
        // console.log("ini dta sudah benar apa belum : ", newFavoriteStatus )
        updateFavorite({ id, input: { is_favorites: newFavoriteStatus } });

        // Opsional: Memperbarui status lokal setelah update berhasil
        setDestinationData(prevData => {
            const updatedFavorites = prevData.favorites.filter(item => item.id !== id);
            const updatedOthers = prevData.others.filter(item => item.id !== id);

            const updatedItem = dataTransaksi.find(item => item.id === id);
            updatedItem.favorite = newFavoriteStatus;

            if (newFavoriteStatus) {
                updatedFavorites.push(updatedItem);
            } else {
                updatedOthers.push(updatedItem);
            }

            return {
                favorites: updatedFavorites,
                others: updatedOthers
            };
        });
    };


    useEffect(() => {
        if (dataTransaksi) {
            // Pisahkan data menjadi favorit dan bukan favorit
            const favorites = dataTransaksi.filter(item => item.favorites);
            const others = dataTransaksi.filter(item => !item.favorites);

            setDestinationData({ favorites, others });
        }
    }, [dataTransaksi, updateFavorite]);

    return (
        <Layout>
            <Box sx={{ mx:6 ,paddingTop: "1.5rem", paddingBottom: "2rem" }}>
                <BreadcrumbsComponent />
                <TransferSearch />
                <TambahRekening />
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "2rem",
                        marginBottom: "1rem"
                    }}
                >
                    <Typography>Transaksi Favorit</Typography>
                </Box>
                {destinationData.favorites.length > 0 ? (
                    <CardTransaksi data={destinationData.favorites} handleToggleFavorite={handleToggleFavorite} />
                ) : (
                    <Typography variant="caption">Tidak ada transaksi favorit.</Typography>
                )}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "2rem",
                        marginBottom: "1rem"
                    }}
                >
                    <Typography>Daftar Transfer</Typography>
                </Box>
                {destinationData.others.length > 0 ? (
                    <CardTransaksi data={destinationData.others} handleToggleFavorite={handleToggleFavorite}/>
                ) : (
                    <p></p>
                )}
            </Box>
        </Layout>
    );
};
