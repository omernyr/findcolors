import React, { useContext, useEffect } from 'react'
import MainContext from '../MainContext'
import ClipboardButton from 'react-clipboard.js'

const Brand = ({ brand }) => {

    function getContrastYIQ(hexcolor) {

        var r = parseInt(hexcolor.substr(0, 2), 16)
        var g = parseInt(hexcolor.substr(2, 2), 16)
        var b = parseInt(hexcolor.substr(4, 2), 16)
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
        return (yiq >= 128) ? "black" : 'white';
    }

    const { selectedBrands, setSelectedBrands } = useContext(MainContext);

    const toggleSelected = () => {

        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }

    }


    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected}> {brand.title} </h5>
            <div className="brand-colors">
                {brand.colors.map(color =>
                    <ClipboardButton component="span" data-clipboard-text={color} style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}` }}>
                        {color}
                    </ClipboardButton>
                )}
            </div>
        </div>
    )
}

export default Brand