import { FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import '../styles/all-page.css';

const Footer = () => {
    return (
        <div className="flex flex-col footer-container">
            <div className="w-full rtl-i">ارتباط با ما:</div>
            <div className="flex flex-row justify-around">
                <div className="ml-2">
                    <a href="tel:09906552092">
                        <div className="mt-5">09906552092</div>
                    </a>
                    <a href="tel:09331089470">
                        <div>09331089470</div>
                    </a>
                </div>

                <div className="mt-5 flex flex-row justify-around custom-icon-container">
                    <FaInstagram className="text-pink-500 hover:text-pink-600" />
                    <FaTelegramPlane className="text-blue-500 hover:text-blue-600" />
                    <FaWhatsapp className="text-green-500 hover:text-green-600" />
                </div>
            </div>
        </div>
    );
}

export default Footer;