import React from 'react'
import footerData from '../../data/footerData'
import FooterColumn from './FooterColumn'
import FooterButton from './FooterButton'
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto py-16 ">

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 px-3 md:px-4">

                {footerData.map((item) => (

                    <FooterColumn
                        key={item.id}
                        title={item.title}
                        links={item.links}
                    />

                ))}

                <FooterButton />

            </div>
            <FooterBottom />

        </footer>
    )
}

export default Footer
