// TransferRupiahPage.js
import { useState } from 'react';
import { Box, Card, Container, Typography } from "@mui/material";
import { Layout } from "../layout";
import { CardTransaksi } from "../../assets/components/cardComponents/CardTransaksi";
import { TransferSearch } from "../../assets/components/transferComponents/TransferSearch";
import { TambahRekening } from "../../assets/components/transferComponents/TambahRekening";
// import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import profileIcon from '../../assets/img/icons/placeholder-profile.png'; // pastikan import profileIcon
import BreadcrumbsComponent from '../../assets/components/layoutsComponents/Breadcrumbs';
// import { BreadcrumbsTranferRupiah } from '../../assets/components/layoutsComponents/BreadcrumbsTransferRupiah';

const initialCardData = [
    {
        id: 1,
        image: profileIcon,
        name: 'Sandy Wilyo',
        noRekening: '1222998866',
        favorite: true,
    },
    {
        id: 2,
        image: profileIcon,
        name: 'Username',
        noRekening: '1222998866',
        favorite: false,
    },
    {
        id: 3,
        image: profileIcon,
        name: 'Username',
        noRekening: '1222998866',
        favorite: false,
    },
];

export const TransferRupiahPage = () => {
    const [cardData, setCardData] = useState(initialCardData);

    const handleToggleFavorite = (id) => {
        setCardData(prevData =>
            prevData.map(card =>
                card.id === id ? { ...card, favorite: !card.favorite } : card
            )
        );
    };

    const favoriteCards = cardData.filter(card => card.favorite);
    const nonFavoriteCards = cardData.filter(card => !card.favorite);

    return (
        <Layout>
            <Container sx={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}>

                <BreadcrumbsComponent />
                {/* <BreadcrumbsTranferRupiah/> */}
            
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
            </Container>
        </Layout>
    );
};