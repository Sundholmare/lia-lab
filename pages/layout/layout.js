import styles from '../../styles/Home.module.css'
import React, { useState } from 'react';


const Layout = () => {

    const image = 'https://consid.se/wp-content/uploads/2019/12/Icon-white.svg'


    return(
        <div className="wrapper">
            <header>
                <nav className={styles.navbar}>
                    <div className={styles.logoBox}>
                        <img className={styles.logo} src={image} alt="consid logo" />
                        <h1 className={styles.title}>Personalverktyg</h1>
                    </div>
                        <button className={styles.btn}>Logga in</button>
                </nav>
            </header>
        </div>
    )
}

export default Layout;
