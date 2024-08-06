// TransferRupiahPage.js
import { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { Layout } from "../layout";
import {CardTransaksi} from "../../assets/components/cardComponents/CardTransaksi";
import { TransferSearch } from "../../assets/components/transferComponents/TransferSearch";
import { TambahRekening } from "../../assets/components/transferComponents/TambahRekening";
import BreadcrumbsComponent from '../../assets/components/breadCrumbs/Breadcrumbs';
import { useGetDataTransaksi } from '../../services/transfer-rupiah/get-data-transaksi';

export const TransferRupiahPage = () => {
    const [cardData, setCardData] = useState([]);
    

    const handleToggleFavorite = (id) => {
        setCardData(prevData =>
            prevData.map(card =>
                card.id === id ? { ...card, favorite: !card.favorite } : card
            )
        );
    };

    const favoriteCards = cardData.filter(card => card.favorite);
    const nonFavoriteCards = cardData.filter(card => !card.favorite);

    // fetching api 
    const { data: dataTransaksi } = useGetDataTransaksi();

    useEffect(() => {
        if (dataTransaksi?.result) {
            setCardData(dataTransaksi.result);
        }
    }, [dataTransaksi]);

    return (
        <Layout>
            <Box sx={{ mx: 6, paddingTop: "1.5rem", paddingBottom: "2rem" }}>
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
                <CardTransaksi
                    cardData={favoriteCards}
                    handleToggleFavorite={handleToggleFavorite}
                />
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
                <CardTransaksi
                    cardData={nonFavoriteCards}
                    handleToggleFavorite={handleToggleFavorite}
                />
            </Box>
        </Layout>
    );
};
