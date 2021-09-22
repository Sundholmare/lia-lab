/* eslint-disable @next/next/no-img-element */
import styles from 'styles/Home.module.css'
import React from 'react';


const Layout = ({ children }) => {
    const image = 'https://consid.se/wp-content/themes/consid/img/consid_white.svg'

    return (
        <div className="wrapper">
            <header className={styles.header}>
                <div className={styles.innercontent}>
                    <div className={styles.logoBox}>
                        <img className={styles.logo} src={image} alt="consid logo" />
                        <h1 className={styles.title}>Personalverktyg</h1>
                    </div>

                    <nav className={styles.navbar}>
                        <button className={styles.btn}>Logga in</button>
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
