import {
	Box,
	ButtonBase,
	Divider,
	Fade,
	Grid,
	IconButton,
	Paper,
	Tooltip,
	Typography,
} from "@mui/material";
import { LayoutSecondary } from "../layoutSecondary";
import BreadcrumbSecondary from "../../assets/components/Breadcrumbs/BreadcrumbSecondary";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import birdImg from "../../assets/img/bird.png";
import catImg from "../../assets/img/cat.png";
import dogImg from "../../assets/img/dog.png";
import { useState, useRef, useEffect } from "react";
import * as Yup from "yup";
import { AkunContent } from "./AkunContent";
import { UbahNoHandphoneContent } from "./UbahNoHandphoneContent";
import { InformasiRupiAppContent } from "./InformasiRupiAppContent";
import { UbahPin } from "./Pin";
import { UbahPassword } from "./Password";
import { useGetUserProfile } from "../../services/user/get-user-profile";
import { useFormik } from "formik";
import { useChangeUserProfile } from "../../services/user/change-user-profile";
import { useAuthContext } from "../../context/AuthContext";
import { useGetImg } from "../../services/user/get-img";
import FailAlert from "../../assets/components/Alerts/FailAlert";
import SuccesAlert from "../../assets/components/Alerts/SuccesAlert";
import SettingsNavigator from "../../assets/components/navigators/SettingsNavigator";

export const PengaturanPage = () => {
	const [activeSection, setActiveSection] = useState("Akun");
	const { account } = useAuthContext();
	const { data: getUserProfile, refetch: userProfileRefetch } = useGetUserProfile();
	const { data: imgData, refetch: imgRefetch } = useGetImg(getUserProfile?.avatar);
	const changeAvatarProfile = useChangeUserProfile();
	const fileInputRef = useRef(null);
	const [profilePic, setProfilePic] = useState(null);

	const validateFile = (file) => {
		const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml"];
		return file && allowedTypes.includes(file.type);
	};
	const formik = useFormik({
		initialValues: {
			avatar: null,
		},
		validationSchema: Yup.object({
			avatar: Yup.mixed()
				.required("Avatar Harus Diisi")
				.test(
					"fileSize",
					"File harus berukuran lebih kecil dari 5MB",
					(value) => !value || (value && value.size <= 5 * 1024 * 1024)
				)
				.test(
					"fileType",
					"Format file harus berupa .jpg, .png, atau .svg",
					(value) => !value || validateFile(value)
				),
		}),
		onSubmit: async (values) => {
			const formData = new FormData();
			if (values.avatar) {
				formData.append("avatar", values.avatar);
			}

			try {
				await changeAvatarProfile.mutateAsync(formData);
			} catch (error) {
				return error;
			}
		},
	});

	const handleFileInputChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			if (validateFile(file)) {
				formik.setFieldValue("avatar", file);
				formik.submitForm(); // Automatically submit
			} else {
				formik.setFieldError("avatar", "Format file harus berupa .jpg, .png, atau .svg");
			}
		}
	};

	const handleImageChange = async (imageUrl) => {
		try {
			const response = await fetch(imageUrl);
			const blob = await response.blob();
			const file = new File([blob], "avatar.png", { type: blob.type });

			console.log("Selected file:", file);

			// Update Formik value
			formik.setFieldValue("avatar", file);
			formik.setFieldTouched("avatar", true); // Mark as touched if needed
			setProfilePic(URL.createObjectURL(file));
		} catch (error) {
			console.error("Error converting image to file:", error);
		}
	};

	const handleClickUpload = () => {
		fileInputRef.current.click();
	};

	const renderContent = () => {
		switch (activeSection) {
			case "Akun":
				return <AkunContent />;
			case "Ubah Pin":
				return <UbahPin />;
			case "Ubah Password":
				return <UbahPassword />;
			case "Ubah No Handphone":
				return <UbahNoHandphoneContent />;
			case "Informasi Rupi App":
				return <InformasiRupiAppContent />;
			default:
				return <AkunContent />;
		}
	};

	useEffect(() => {
		userProfileRefetch();
		imgRefetch();
	}, [changeAvatarProfile]);

	return (
		<LayoutSecondary>
			<Grid
				xs={12}
				sx={{
					height: "130vh",
				}}
			>
				<BreadcrumbSecondary />

				<Grid
					sx={{
						position: "absolute",
						top: "230px",
						left: "0",
						right: "0",
						bottom: "0",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						mb: 10,
					}}
				>
					<Grid container spacing={4} sx={{ px: 8 }}>
						<Grid item xs={3.5}>
							<Paper
								elevation={5}
								sx={{
									px: 4,
									py: 10,
									display: "flex",
									flexDirection: "column",
									gap: 3,
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										// justifyContent: "center",
										alignItems: "center",
										textAlign: "center",
										gap: 1,
									}}
								>
									{/* {profilePic ? ( */}
									<Paper
										component="paper"
										elevation={4}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: "9rem",
											height: "9rem",
											borderRadius: "50%",
											overflow: "hidden",
										}}
									>
										<img
											src={imgData}
											alt="Profile"
											style={{ width: "8rem", height: "8rem", borderRadius: "50%" }}
										/>
									</Paper>
									<Tooltip
										TransitionComponent={Fade}
										slotProps={{
											popper: {
												modifiers: [
													{
														name: "offset",
														options: {
															offset: [0, -14],
														},
													},
												],
											},
										}}
										TransitionProps={{ timeout: 600 }}
										title={account.full_name}
									>
										<Typography
											variant="h4"
											sx={{
												fontWeight: "bold",
												width: "100%",
												overflow: "hidden",
												textOverflow: "ellipsis",
											}}
										>
											{account.full_name}
										</Typography>
									</Tooltip>

									<Typography sx={{ mt: 2.5 }}>Pasang foto atau avatar favoritmu</Typography>
								</Box>
								<form onSubmit={formik.handleSubmit}>
									<Box sx={{ display: "flex", justifyContent: "space-between" }}>
										<IconButton
											onClick={handleClickUpload}
											aria-label="Tambah atau Ganti Foto,"
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: 60,
												height: 60,
												border: "2px dashed black",
												borderRadius: "50%",
												overflow: "hidden",
												padding: 2,
												boxShadow: 3,
												backgroundColor: "#f5f5f5",
											}}
										>
											<AddAPhotoOutlinedIcon />
											<input
												type="file"
												ref={fileInputRef}
												style={{ display: "none" }}
												accept="image/*"
												id="avatar"
												name="avatar"
												onChange={handleFileInputChange}
												onBlur={formik.handleBlur}
											/>
										</IconButton>
										<Box
											onClick={() => handleImageChange(birdImg)}
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: 60,
												height: 60,
												borderRadius: "50%",
												overflow: "hidden",
												border: profilePic === birdImg ? "2px solid #1976d2" : "none",
												cursor: "pointer",
											}}
											aria-label="Select bird image"
										>
											<img src={birdImg} alt="Pilih gambar burung" />
										</Box>
										<Box
											onClick={() => handleImageChange(catImg)}
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: 60,
												height: 60,
												borderRadius: "50%",
												overflow: "hidden",
												border: profilePic === catImg ? "2px solid #1976d2" : "none",
												cursor: "pointer",
											}}
											aria-label="Select cat image"
										>
											<img src={catImg} alt="Pilih gambar kucing" />
										</Box>
										<Box
											onClick={() => handleImageChange(dogImg)}
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: 60,
												height: 60,
												borderRadius: "50%",
												overflow: "hidden",
												border: profilePic === dogImg ? "2px solid #1976d2" : "none",
												cursor: "pointer",
											}}
											aria-label="Select dog image"
										>
											<img src={dogImg} alt="Pilih gambar gugug" />
										</Box>
									</Box>
									<Box sx={{ mt: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
										{formik.errors.avatar && formik.touched.avatar && (
											<Typography color="error">{formik.errors.avatar}</Typography>
										)}
									</Box>
								</form>
							</Paper>
						</Grid>
						<Grid item xs={8.5}>
							<SettingsNavigator
								activeSection={activeSection}
								setActiveSection={setActiveSection}
								renderContent={renderContent}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{changeAvatarProfile.isError && (
				<FailAlert
					message={
						changeAvatarProfile.error?.response?.data?.message || changeAvatarProfile.error?.message
					}
					title="Foto Profil Gagal Diubah"
				/>
			)}
			{changeAvatarProfile.isSuccess && <SuccesAlert message="" title="Foto Profil Berhasil Diubah" />}
		</LayoutSecondary>
	);
};
