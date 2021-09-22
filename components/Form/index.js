import { useState } from 'react';

import styles from 'styles/Home.module.css';

export default function Form({ children, onSubmit, setFormData, formData }) {
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleOnChange = (e) => {
        e.preventDefault();

        setFormData({
            ...formData, 
            [e.target.name]: Object.assign(formData[e.target.name], formData[e.target.name] = e.target.value)
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('');
        setMessage('');

        if (e.target.checkValidity()) {
            onSubmit();
        }
    };

    return (
        <div>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} onChange={handleOnChange} className={styles.form}>
                    {error ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.error}>{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.message}>{message}</h3>
                        </div>
                    ) : null}

                   {children}
                </form>
            </div>
        </div>
    );
}