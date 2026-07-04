import React from 'react'
import appstore from '../../assets/app_store.png'
import corplogo from '../../assets/Corp-Logo.png'
import playstore from '../../assets/googleplaystorelogo.png'

const FooterButton = () => {
    return (
        <div className='space-y-4 flex flex-col items-center justify-center'>
            <img src={appstore} alt="" />
            <img src={playstore} alt="" />
            <img src={corplogo} alt="" />

        </div>
    )
}

export default FooterButton
