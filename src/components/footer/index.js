import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer-main">
            <div className="footer-content">
                <div> <FooterDesc /> </div>
                <div><FooterSocials /></div>
                <div><FooterMenu /></div>
            </div>
        </footer>
    );
}

function FooterDesc() {
    return (
        <div className="footer-desc">
            <h6>Sustainability 
            Upheld in 
            Business</h6>
            <p>We promote economic lifestyles that 
            support and sustain our planet for future generations. </p>
            <p className="footer-green">Rethink consumersim.</p>
        </div>
    );
}

function FooterSocials() {
    return (
        <div className="footer-socials">
            <h5>Lets keep in touch!</h5>
            <div className="footer-logos-container">
                <a href="https://www.facebook.com/SUBinitiative">
                    <svg className="fb-logo logo" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 0H1C0.446875 0 0 0.446875 0 1V24C0 24.5531 0.446875 25 1 25H24C24.5531 25 25 24.5531 25 24V1C25 0.446875 24.5531 0 24 0ZM23 23H17.2469V15.3188H20.4969L20.9844 11.5469H17.2469V9.1375C17.2469 8.04375 17.55 7.3 19.1156 7.3H21.1125V3.925C20.7656 3.87813 19.5813 3.775 18.2 3.775C15.3188 3.775 13.3469 5.53437 13.3469 8.7625V11.5437H10.0906V15.3156H13.35V23H2V2H23V23Z" fill="black"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/subinitiative">
                    <svg className="ig-logo logo" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.34659 0.075C8.67955 0.0136363 9.10455 0 12.5 0C15.8955 0 16.3205 0.0147727 17.6523 0.075C18.9841 0.135227 19.8932 0.347727 20.6886 0.655682C21.5216 0.970455 22.2773 1.4625 22.9023 2.09886C23.5386 2.72273 24.0295 3.47727 24.3432 4.31136C24.6523 5.10682 24.8636 6.01591 24.925 7.34545C24.9864 8.68068 25 9.10568 25 12.5C25 15.8955 24.9852 16.3205 24.925 17.6534C24.8648 18.983 24.6523 19.892 24.3432 20.6875C24.0295 21.5217 23.5378 22.2775 22.9023 22.9023C22.2773 23.5386 21.5216 24.0295 20.6886 24.3432C19.8932 24.6523 18.9841 24.8636 17.6545 24.925C16.3205 24.9864 15.8955 25 12.5 25C9.10455 25 8.67955 24.9852 7.34659 24.925C6.01705 24.8648 5.10795 24.6523 4.3125 24.3432C3.47832 24.0295 2.72252 23.5378 2.09773 22.9023C1.4618 22.278 0.969676 21.5226 0.655682 20.6886C0.347727 19.8932 0.136364 18.9841 0.075 17.6545C0.0136363 16.3193 0 15.8943 0 12.5C0 9.10455 0.0147727 8.67955 0.075 7.34773C0.135227 6.01591 0.347727 5.10682 0.655682 4.31136C0.97014 3.47737 1.46263 2.72195 2.09886 2.09773C2.72277 1.46193 3.47781 0.969822 4.31136 0.655682C5.10682 0.347727 6.01591 0.136364 7.34545 0.075H7.34659ZM17.5511 2.325C16.233 2.26477 15.8375 2.25227 12.5 2.25227C9.1625 2.25227 8.76705 2.26477 7.44886 2.325C6.22955 2.38068 5.56818 2.58409 5.12727 2.75568C4.54432 2.98295 4.12727 3.25227 3.68977 3.68977C3.27505 4.09324 2.95589 4.58441 2.75568 5.12727C2.58409 5.56818 2.38068 6.22955 2.325 7.44886C2.26477 8.76705 2.25227 9.1625 2.25227 12.5C2.25227 15.8375 2.26477 16.233 2.325 17.5511C2.38068 18.7705 2.58409 19.4318 2.75568 19.8727C2.95568 20.4148 3.275 20.9068 3.68977 21.3102C4.09318 21.725 4.58523 22.0443 5.12727 22.2443C5.56818 22.4159 6.22955 22.6193 7.44886 22.675C8.76705 22.7352 9.16136 22.7477 12.5 22.7477C15.8386 22.7477 16.233 22.7352 17.5511 22.675C18.7705 22.6193 19.4318 22.4159 19.8727 22.2443C20.4557 22.017 20.8727 21.7477 21.3102 21.3102C21.725 20.9068 22.0443 20.4148 22.2443 19.8727C22.4159 19.4318 22.6193 18.7705 22.675 17.5511C22.7352 16.233 22.7477 15.8375 22.7477 12.5C22.7477 9.1625 22.7352 8.76705 22.675 7.44886C22.6193 6.22955 22.4159 5.56818 22.2443 5.12727C22.017 4.54432 21.7477 4.12727 21.3102 3.68977C20.9067 3.27508 20.4156 2.95592 19.8727 2.75568C19.4318 2.58409 18.7705 2.38068 17.5511 2.325ZM10.9034 16.3534C11.7951 16.7246 12.7879 16.7747 13.7124 16.4951C14.6369 16.2156 15.4357 15.6238 15.9723 14.8207C16.5089 14.0177 16.7501 13.0533 16.6546 12.0922C16.5591 11.1311 16.133 10.2329 15.4489 9.55114C15.0128 9.11531 14.4855 8.7816 13.9049 8.57403C13.3244 8.36646 12.705 8.29018 12.0915 8.3507C11.4779 8.41122 10.8854 8.60702 10.3566 8.92401C9.82779 9.241 9.37584 9.6713 9.0333 10.1839C8.69075 10.6965 8.46612 11.2787 8.37559 11.8886C8.28505 12.4984 8.33085 13.1208 8.5097 13.7108C8.68855 14.3008 8.996 14.8439 9.40991 15.3008C9.82382 15.7578 10.3339 16.1173 10.9034 16.3534ZM7.95682 7.95682C8.55344 7.3602 9.26173 6.88694 10.0412 6.56405C10.8208 6.24116 11.6563 6.07497 12.5 6.07497C13.3437 6.07497 14.1792 6.24116 14.9588 6.56405C15.7383 6.88693 16.4466 7.3602 17.0432 7.95682C17.6398 8.55344 18.1131 9.26173 18.436 10.0412C18.7588 10.8208 18.925 11.6563 18.925 12.5C18.925 13.3437 18.7588 14.1792 18.436 14.9588C18.1131 15.7383 17.6398 16.4466 17.0432 17.0432C15.8383 18.2481 14.204 18.925 12.5 18.925C10.796 18.925 9.16175 18.2481 7.95682 17.0432C6.75189 15.8383 6.07497 14.204 6.07497 12.5C6.07497 10.796 6.75189 9.16175 7.95682 7.95682ZM20.35 7.03182C20.4978 6.89235 20.6162 6.72464 20.6981 6.53861C20.7799 6.35258 20.8236 6.15201 20.8266 5.94878C20.8296 5.74556 20.7917 5.5438 20.7153 5.35547C20.6389 5.16713 20.5255 4.99603 20.3818 4.85232C20.2381 4.7086 20.067 4.59518 19.8786 4.51877C19.6903 4.44236 19.4885 4.40452 19.2853 4.40748C19.0821 4.41044 18.8815 4.45415 18.6955 4.53602C18.5095 4.61789 18.3417 4.73624 18.2023 4.88409C17.931 5.17162 17.7825 5.55355 17.7883 5.94878C17.7941 6.34402 17.9536 6.72145 18.2331 7.00096C18.5126 7.28046 18.8901 7.44003 19.2853 7.44579C19.6805 7.45156 20.0625 7.30306 20.35 7.03182Z" fill="black"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/company/the-sub-initiative/">
                    <svg className="in-logo logo" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.6628 0.390625H2.33721C1.2625 0.390625 0.390625 1.2625 0.390625 2.33721V22.6628C0.390625 23.7375 1.2625 24.6094 2.33721 24.6094H22.6628C23.7375 24.6094 24.6094 23.7375 24.6094 22.6628V2.33721C24.6094 1.2625 23.7375 0.390625 22.6628 0.390625ZM22.6628 22.6719C9.10635 22.6688 2.32812 22.6658 2.32812 22.6628C2.33115 9.10635 2.33418 2.32812 2.33721 2.32812C15.8937 2.33115 22.6719 2.33418 22.6719 2.33721C22.6688 15.8937 22.6658 22.6719 22.6628 22.6719ZM3.98105 9.46963H7.57451V21.028H3.98105V9.46963ZM5.7793 7.88936C6.92666 7.88936 7.86211 6.95693 7.86211 5.80654C7.86211 5.53302 7.80824 5.26218 7.70357 5.00949C7.59889 4.75679 7.44548 4.52718 7.25207 4.33377C7.05866 4.14037 6.82905 3.98695 6.57635 3.88227C6.32366 3.7776 6.05282 3.72373 5.7793 3.72373C5.50578 3.72373 5.23494 3.7776 4.98224 3.88227C4.72954 3.98695 4.49993 4.14037 4.30653 4.33377C4.11312 4.52718 3.9597 4.75679 3.85503 5.00949C3.75036 5.26218 3.69648 5.53302 3.69648 5.80654C3.69346 6.95693 4.62588 7.88936 5.7793 7.88936ZM13.4173 15.3094C13.4173 13.8018 13.7049 12.3426 15.5728 12.3426C17.4134 12.3426 17.4406 14.0651 17.4406 15.4062V21.028H21.0311V14.6888C21.0311 11.5767 20.359 9.18203 16.7231 9.18203C14.9764 9.18203 13.8048 10.1417 13.3234 11.0499H13.275V9.46963H9.82686V21.028H13.4173V15.3094Z" fill="black"/>
                    </svg>
                </a>
                <a href="mailto: info@subinitiative.com">
                    <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.5 0H2.5C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5V22.5C0 23.163 0.263392 23.7989 0.732233 24.2678C1.20107 24.7366 1.83696 25 2.5 25H32.5C33.163 25 33.7989 24.7366 34.2678 24.2678C34.7366 23.7989 35 23.163 35 22.5V2.5C35 1.83696 34.7366 1.20107 34.2678 0.732233C33.7989 0.263392 33.163 0 32.5 0ZM29.75 2.5L17.5 10.975L5.25 2.5H29.75ZM2.5 22.5V3.6375L16.7875 13.525C16.9967 13.6702 17.2453 13.7479 17.5 13.7479C17.7547 13.7479 18.0033 13.6702 18.2125 13.525L32.5 3.6375V22.5H2.5Z" fill="black"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}

function FooterMenu() {
    return (
        <div className="footer-menu">
            <h6>Menu</h6>
            <div className="footer-links">
                <Link to={ROUTES.ABOUT}>Meet the Team</Link>
                <Link to={ROUTES.BUSINESSES}>Find Businesses</Link>
                <Link to={ROUTES.CRITERIA}>Criteria</Link>
                <Link to={ROUTES.CONTACT}>Contact us</Link>
            </div>
        </div>
    );
}