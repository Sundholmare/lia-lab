import { useState } from 'react';

import styles from '../styles/Home.module.css';

export default function AddPost() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [closestManager, setClosestManager] = useState('');
    const [officeLocation, setOfficeLocation] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [firstEmploymentDate, setFirstEmploymentDate] = useState('');
    const [lastEmploymentDate, setLastEmploymentDate] = useState('');
    const [reAssign, setReAssign] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!firstName || !lastName) return setError('All fields are required');
    };

    return (
        <div>
            <div className={styles.container}>
                <form onSubmit={handlePost} className={styles.form}>
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
                    <div className={styles.formItem}>
                        <label>Firstname</label>
                        <input
                            type="text"
                            name="firstname"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            placeholder="Firstname"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Lastname</label>
                        <textarea
                            name="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            placeholder="Lastname"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Email</label>
                        <textarea
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Email"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Phonenumber</label>
                        <textarea
                            name="phonenumber"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            placeholder="Phonenumber"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Closest manager</label>
                        <textarea
                            name="closest manager"
                            onChange={(e) => setClosestManager(e.target.value)}
                            value={closestManager}
                            placeholder="Closest manager"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Office location</label>
                        <textarea
                            name="office location"
                            onChange={(e) => setOfficeLocation(e.target.value)}
                            value={officeLocation}
                            placeholder="Office location"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Date of birth</label>
                        <textarea
                            name="date of birth"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            value={dateOfBirth}
                            placeholder="Date of birth"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>First employment date</label>
                        <textarea
                            name="first employment date"
                            onChange={(e) => setFirstEmploymentDate(e.target.value)}
                            value={firstEmploymentDate}
                            placeholder="First employment date"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Last employment date</label>
                        <textarea
                            name="last employment date"
                            onChange={(e) => setLastEmploymentDate(e.target.value)}
                            value={lastEmploymentDate}
                            placeholder="Last employment date"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Asked to reassign</label>
                        <textarea
                            name="reassign"
                            onChange={(e) => setReAssign(e.target.value)}
                            value={reAssign}
                            placeholder="Asked to reassign"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <button type="submit">Add employee</button>
                    </div>
                </form>
            </div>
        </div>
    );
}