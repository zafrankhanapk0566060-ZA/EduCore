import React from 'react'

const FooterColumn = ({ title, links }) => {
    return (
        <div>
            <h2 className='font-semibold text-sm mb-2'>{title}</h2>

            <ul className='space-y-2'>
                {links.map((link, index) => (
                    <li
                        key={index}
                        className='text-xs text-gray-600 hover:underline cursor-pointer'
                    >
                        {link}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default FooterColumn
