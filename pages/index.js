import { useState } from 'react';

import PostCard from 'components/PostCard';
import styles from 'styles/Home.module.css';
import Form from 'components/Form';
import Layout from 'components/Layout';

export default function Home({ persons }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        closestManager: '',
        officeLocation: '',
        dateOfBirth: '',
        firstEmploymentDate: '',
        lastEmploymentDate: '',
        reAssign: false
    })

    const onSubmit = () => {
        //post formData to mongo

        console.log(formData);
        
    }
  
    return (
        <Layout>
            <div className={styles.container}>
                <ul>
                    {persons.map((person, i) => (
                        <PostCard post={person} key={i} />
                    ))}
                </ul>

                <Form onSubmit={onSubmit} setFormData={setFormData} formData={formData}>
                    <div className={styles.formItem}>
                        <label>Firstname</label>
                        <input
                            type="text"
                            name="firstName"
                            defaultValue={formData.firstName}
                            placeholder="Firstname"
                            required
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label>Lastname</label>
                        <input
                            type="text"
                            name="lastName"
                            defaultValue={formData.lastName}
                            placeholder="Lastname"
                            required
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            defaultValue={formData.email}
                            placeholder="Email"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label>Phonenumber</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            defaultValue={formData.phoneNumber}
                            placeholder="Phonenumber"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label>Closest manager</label>
                        <input
                            type="text"
                            name="closestManager"
                            defaultValue={formData.closestManager}
                            placeholder="Closest manager"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label>Office location</label>
                        <input
                            type="text"
                            name="officeLocation"
                            defaultValue={formData.officeLocation}
                            placeholder="Office location"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label>Date of birth</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            defaultValue={formData.dateOfBirth}
                            placeholder="Date of birth"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label>First employment date</label>
                        <input
                            type="text"
                            name="firstEmploymentDate"
                            defaultValue={formData.firstEmploymentDate}
                            placeholder="First employment date"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label>Last employment date</label>
                        <input
                            type="text"
                            name="lastEmploymentDate"
                            defaultValue={formData.lastEmploymentDate}
                            placeholder="Last employment date"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label>Asked to reassign</label>
                        <input
                            type="checkbox"
                            name="reAssign"
                            defaultValue={formData.reAssign}
                            placeholder="Asked to reassign"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <button type="submit">Add employee</button>
                    </div>
                </Form>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);
    // extract the data
    let data = await response.json();

    return {
        props: {
            persons: data['message'],
        },
    };
}