/* eslint-disable @next/next/no-img-element */
import styles from 'styles/Home.module.css'
import React from 'react';
import Form from 'components/Form';
import Modal from 'components/Modal/index'


const Layout = ({ children, toggleModal }) => {
    const image = 'https://consid.se/wp-content/uploads/2019/12/Icon-white.svg'

    return (
        <div className="wrapper">
            <header className="bg-consid">
                <div className="py-4 flex items-center justify-between">
                    <div className="h-full w-1/3 ml-16 flex items-center justify-between">
                        <img className="h-24 mx-6" src={image} alt="consid logo" />
                        <h1 className="text-white text-tt my-8">Personalverktyg</h1>
                        <button onClick={toggleModal} 
                            className={`mr-16 min-w-40 min-h-12 p-2 rounded-lg bg-none text-white border-2 border-white cursour-pointer font-bold text-btn ${styles.btn}`} >
                        Lägg till personal
                        </button>
                    </div>

                    <nav className="flex h-32 items-center justify-between">
                        <button 
                        className={`mr-16 w-36 h-10 rounded-lg bg-none text-white border-2 border-white cursour-pointer font-bold text-btn ${styles.btn}`}>
                            Logga in
                            </button>
                    </nav>
                </div>
            </header>

            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;
