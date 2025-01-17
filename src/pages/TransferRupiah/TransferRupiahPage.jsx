// TransferRupiahPage.js
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Layout } from "../layout";
import { CardTransaksi } from "../../assets/components/Cards/CardTransaksi";
import { TransferSearch } from "../../assets/components/transferComponents/TransferSearch";
import { TambahRekening } from "../../assets/components/transferComponents/TambahRekening";
import { useAddFavorite } from "../../services/transfer-rupiah/add-favorite-transaksi";
import { Breadcrumb } from "../../assets/components/Breadcrumbs/Breadcrumb";
import { useTransferContext } from "../../context/TransferContext";


export const TransferRupiahPage = () => {
	const [searchData, setSearchData] = useState("");
	const [page, setPage] = useState(1);
	const rowsPerPage = 10;
	const [destinationData, setDestinationData] = useState({
		favorites: [],
		others: [],
	});

	const { dataTransaksi, refetchDataTransaksi, setStep, setParams } = useTransferContext()

	const { mutate: updateFavorite } = useAddFavorite();

	const handleToggleFavorite = (id, currentFavoriteStatus) => {
		const newFavoriteStatus = !currentFavoriteStatus;
		updateFavorite({ id, input: { is_favorites: newFavoriteStatus } });
		setDestinationData((prevData) => {
			const updatedFavorites = prevData.favorites.filter((item) => item.id !== id);
			const updatedOthers = prevData.others.filter((item) => item.id !== id);

			const updatedItem = dataTransaksi.content?.find((item) => item.id === id);
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
		setStep(1)
	}, [])

	useEffect(() => {
		setParams(prevParams => {
			const newParams = {
				...prevParams,
				page: page - 1,
				size: rowsPerPage,
				search: searchData
			};
			return newParams;
		})


		if (dataTransaksi) {
			// Pisahkan data menjadi favorit dan bukan favorit
			const favorites = dataTransaksi?.content?.filter((item) => item.favorites);
			const others = dataTransaksi?.content.filter((item) => !item.favorites);
			setDestinationData({ favorites, others });
		}
	}, [dataTransaksi, searchData]);

	useEffect(() => {
		refetchDataTransaksi()
	}, [destinationData]);


	return (
		<Layout>
			<Box sx={{ mx: 6, paddingTop: "1.5rem", paddingBottom: "2rem" }}>
				<Breadcrumb />
				<TransferSearch onSearch={(text) => setSearchData(text)} />
				<TambahRekening />
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginTop: "2rem",
						marginBottom: "1rem",
					}}
				>
					<Typography id="list-transaksi-favorit">Transaksi Favorit</Typography>
				</Box>
				{destinationData.favorites.length > 0 ? (
					<CardTransaksi
						data={destinationData.favorites}
						handleToggleFavorite={handleToggleFavorite}
						aria-labelledby="transaksi-favorit"
					/>
				) : (
					<Typography variant="caption">Tidak ada transaksi favorit.</Typography>
				)}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						marginTop: "2rem",
						marginBottom: "1rem",
					}}
				>
					<Typography id="list-transaksi">Daftar Transfer</Typography>
				</Box>
				{destinationData.others.length > 0 ? (
					<CardTransaksi
						data={destinationData.others}
						handleToggleFavorite={handleToggleFavorite}
						aria-labelledby="list-transaksi"
					/>
				) : (
					<p></p>
				)}
			</Box>
		</Layout>
	);
};
