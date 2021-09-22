import styles from 'styles/Home.module.css'
import React from 'react';


const Layout = ({ children }) => {
    const image = 'https://consid.se/wp-content/themes/consid/img/consid_white.svg'

    return (
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

            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;
