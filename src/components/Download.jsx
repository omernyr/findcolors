import React, { useContext } from 'react'
import { GrClose, GrLink, GrDownload } from "react-icons/gr"
import MainContext from '../MainContext'

const Download = () => {

    const { selectedBrands, setSelectedBrands } = useContext(MainContext);

    const getLink = () => {

        prompt("Here\'s the URL to share", `http://localhost:3002/collection/${selectedBrands.join(',')}`)
    }

    return (
        <div className='download'>
            <div className="actions">
                <a href="">
                    <GrDownload />
                </a>
                <button onClick={getLink}>
                    <GrLink />
                </button>
            </div>
            <div className="selected">
                <button onClick={() => setSelectedBrands([])}> <GrClose /> </button>
                {selectedBrands.length} brands connected

            </div>
        </div>
    )
}

export default Download