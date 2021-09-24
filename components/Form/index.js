import { useState } from 'react';

import styles from 'styles/Home.module.css';

export default function Form({ children, onSubmit, setFormData, formData }) {
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleOnChange = (e) => {
        e.preventDefault();

        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
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
            <div className="h-full w-full">
                <form onSubmit={handleSubmit} onChange={handleOnChange} className="flex flex-col h-full w-full">
                    {/* {error ? (
                        <div>
                            <h3>{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div >
                            <h3 >{message}</h3>
                        </div>
                    ) : null} */}

                    {children}
                </form>
            </div>
    );
}