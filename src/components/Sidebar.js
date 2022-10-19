import React, { useState } from 'react'
import Modal from "react-modal"
import {GrClose} from "react-icons/gr"

const Sidebar = () => {


    const [modalIsOpen, setModalIsOpen] = useState(false);


    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <>
            <aside className='sidebar'>
                <div className='logo'>
                    <a> find <b>Colors</b> </a>

                </div>
                <div className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum velit neque sunt doloribus placeat nam, corrupti aliquam fuga earum illum totam harum voluptate commodi porro, quas magnam exercitationem maiores officiis!
                </div>
                <nav className='menu'>
                    <ul>
                        <li>
                            <a onClick={toggleModal}>
                                About BrandColors
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay"
            >
                <button className='modal-close-btn' onClick={toggleModal}> <GrClose /> </button>
                <h2>
                    About BrandColors
                </h2>
                <p>
                    BrandColors was created by <b> DesignBombs</b>. The goal was to create a helpful reference for the brand color codes that are needed most often.
                </p>
                <p>
                    It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <b>2 million pageviews</b>. There are now over <b>600 brands</b> with <b>1600 colors</b> and the collection is always growing.
                </p>

            </Modal>

        </>
    )
}

export default Sidebar