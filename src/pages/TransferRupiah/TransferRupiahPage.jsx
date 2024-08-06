// TransferRupiahPage.js
import { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { Layout } from "../layout";
import { CardTransaksi } from "../../assets/components/cardComponents/CardTransaksi";
import { TransferSearch } from "../../assets/components/transferComponents/TransferSearch";
import { TambahRekening } from "../../assets/components/transferComponents/TambahRekening";
// import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import profileIcon from '../../assets/img/icons/placeholder-profile.png'; // pastikan import profileIcon
import BreadcrumbsComponent from '../../assets/components/breadCrumbs/Breadcrumbs';
import { useGetDataTransaksi } from '../../services/transfer-rupiah/get-data-transaksi';
import { useAddFavorite } from '../../services/transfer-rupiah/add-favorite-transaksi';
// import { BreadcrumbsTranferRupiah } from '../../assets/components/layoutsComponents/BreadcrumbsTransferRupiah';

// const initialCardData = [
//     {
//         id: 1,
//         image: profileIcon,
//         name: 'Sandy Wilyo',
//         noRekening: '1222998866',
//         favorite: true,
//     },
//     {
//         id: 2,
//         image: profileIcon,
//         name: 'Username',
//         noRekening: '1222998866',
//         favorite: false,
//     },
//     {
//         id: 3,
//         image: profileIcon,
//         name: 'Username',
//         noRekening: '1222998866',
//         favorite: false,
//     },
// ];

export const TransferRupiahPage = () => {
    const [destinationData, setDestinationData] = useState(null);
    console.log("ini data :", destinationData)

    //fetching api 
    const { data: dataTransaksi } = useGetDataTransaksi();

    // const { mutate: updateFavorite } = useAddFavorite();

    useEffect(() => {
        setDestinationData(dataTransaksi)
    }, [destinationData]);

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
                {/* <CardTransaksi
                    cardData={destinationData}
                    // handleToggleFavorite={handleToggleFavorite}
                /> */}
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
                {/* <CardTransaksi
                    cardData={nonFavoriteCards}
                    handleToggleFavorite={handleToggleFavorite}
                /> */}
            </Box>
        </Layout>
    );
};
