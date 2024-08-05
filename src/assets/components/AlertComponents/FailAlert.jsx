import Swal from 'sweetalert2';
import FailIcon from "../../img/icons/fail-icon.svg"
import "../../css/styleAlert.css"
import { useEffect } from 'react';

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
            imageAlt: 'Done icon',
            confirmButtonText: 'OK',
            confirmButtonColor: '#0066AE',
            customClass: {
                confirmButton: 'custom-swal-confirm-button',
                htmlContainer: 'custom-swal-html-container',
            },
            width: '20rem',
        });
    };

    return null
};

export default FailAlert;
