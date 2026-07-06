import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaTiktok, } from "react-icons/fa";

const FooterBottom = () => {
    return (
        <div className="border-t border-gray-300 mt-12 md:px-4 px-3 pt-6  flex justify-between items-center">

            <p>© 2026 EduCore. All rights reserved.</p>

            <div className="flex gap-5">
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
                <FaTiktok />
            </div>

        </div>
    );
};

export default FooterBottom
