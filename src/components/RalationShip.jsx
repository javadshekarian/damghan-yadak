import { FaInstagram, FaTelegramPlane, FaWhatsapp, FaPhone } from 'react-icons/fa';
import '../styles/all-page.css';

const RalationShips = () => {
    return (
        <div className="flex flex-col justify-center fixed h-full rtl">
            <div className="w-full flex flex-row justify-start">
                <div 
                    className="
                        flex 
                        flex-col 
                        justify-around 
                        items-center 
                        custom-fix-relationship-content
                    ">
                    <a href="tel:09906552092">
                        <FaPhone className="text-green-400 hover:text-gray-900 text-3xl cursor-pointer" />
                    </a>
                    <FaInstagram className="text-pink-500 hover:text-pink-600 text-3xl cursor-pointer" />
                    <FaTelegramPlane className="text-blue-500 hover:text-blue-600 text-3xl cursor-pointer" />
                    <FaWhatsapp className="text-green-500 hover:text-green-600 text-3xl cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default RalationShips;
