import Swal from "sweetalert2";
import FailIcon from "../../img/icons/fail-icon.svg";
import "../../css/styleAlert.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

const FailAlert = ({ title, message }) => {
	useEffect(() => {
		showAlert();
	}, []);

	const showAlert = () => {
		Swal.fire({
			html: `
                <div class="custom-swal-container">
                    <div class="custom-fail-image-container">
                        <img src="${FailIcon}" class="custom-swal-image" />
                    </div>
                    <h3 class="custom-swal-title">${title}</h3>
                    <p class="custom-swal-message">${message}</p>
                </div>
            `,
			imageAlt: "Fail icon",
			confirmButtonText: "OK",
			confirmButtonColor: "#0066AE",
			customClass: {
				confirmButton: "custom-swal-confirm-button",
				htmlContainer: "custom-swal-html-container",
			},
			width: "20rem",
		});
	};

	return null;
};

FailAlert.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

export default FailAlert;
