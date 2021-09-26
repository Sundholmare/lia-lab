import { useState } from 'react';

import styles from 'styles/Home.module.css';

export default function Form({ children, onSubmit, setFormData, formData }) {
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleOnChange = (e) => {
        e.preventDefault();

        // sätter formdatans värde till varje unik inputs value.
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

        // kollar om input har fått tillräcklig input för att gå vidare.
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
                    
                    {children} {/* kopplar samman innehållet man ger <Form></Form> elementet */}
                </form>
            </div>
    );
}