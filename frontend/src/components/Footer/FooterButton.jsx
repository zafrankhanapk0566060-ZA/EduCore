import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaTiktok, } from "react-icons/fa";

import appstore from '../../assets/app_store.png'
import corplogo from '../../assets/Corp-Logo.png'
import playstore from '../../assets/googleplaystorelogo.png'

const FooterButton = () => {
    return (
        <div>
            <div className='space-y-6 flex flex-col items-center justify-center'>
                <img src={appstore} alt="" />
                <img src={playstore} alt="" />
                <img src={corplogo} alt="" />

            </div>

        </div>
    )
}

export default FooterButton
