import { useState } from 'react';

import PostCard from 'components/PostCard';
import styles from 'styles/Home.module.css';
import Form from 'components/Form';
import Layout from 'components/Layout';
import Modal from 'components/Modal/index'

export default function Home({ persons }) {

    const [showModal, setShowModal] = useState(false);

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

    console.log(formData);

    const onSubmit = async (e) => {

        // post formData to mongo
        // post structure
        let post = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        closestManager: formData.closestManager,
        officeLocation: formData.officeLocation,
        firstEmploymentDate: formData.firstEmploymentDate,
        lastEmploymentDate: formData.lastEmploymentDate,
        reAssign: formData.reAssign
        };

        // save the post
        let response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
        });

        // get the data
        let data = await response.json();

        if (data.success) {
            // reset the fields
            setFormData({
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

          // set the message
        return 'Addition successful';
            } else {
          // set the error
        return 'Error';
        }
        
    }

    const handleToggleModal = () => setShowModal(!showModal);
    

    return (
        <Layout toggleModal={handleToggleModal}>
            <div>
                <Modal
                    onClose={handleToggleModal}
                    show={showModal}>
                    <Form onSubmit={onSubmit} setFormData={setFormData} formData={formData}>

                    <div className="p-2 border-b-2">
                        <label className="font-bold">Firstname: </label>
                        <input
                            type="text"
                            name="firstName"
                            defaultValue={formData.firstName}
                            placeholder="Firstname"
                            required
                        />
                    </div>

                    <div className="p-2 border-b-2">
                        <label className="font-bold">Lastname: </label>
                        <input
                            type="text"
                            name="lastName"
                            defaultValue={formData.lastName}
                            placeholder="Lastname"
                            required
                        />
                    </div>

                    <div className="p-2 border-b-2">
                        <label className="font-bold">Email: </label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={formData.email}
                            placeholder="Email"
                        />
                    </div>

                    <div className="p-2 border-b-2">
                        <label className="font-bold">Phonenumber: </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            defaultValue={formData.phoneNumber}
                            placeholder="Phonenumber"
                        />
                    </div>

                    <div className="p-2 border-b-2">
                        <label className="font-bold">Closest manager: </label>
                        <select
                            type="text"
                            name="closestManager"
                            placeholder="Closest manager">
                            <option >Välj chef</option>
                            <option value="Elisabeth Paulsson">Elisabeth Paulsson</option>
                            <option value="Peter Elgåker">Peter Elgåker</option>
                        </select>
                    </div>

                    <div className="p-2 border-b-2">
                        <label className="font-bold">Office location: </label>
                        <select
                            type="text"
                            name="officeLocation"
                            placeholder="Office location">
                            <option >Välj kontor</option>
                            <option value="Helsingborg">Helsingborg</option>
                            <option value="Malmö">Malmö</option>
                        </select>
                    </div>

                    <div className="p-2 border-b-2">
                        <label className="font-bold">Date of birth: </label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            defaultValue={formData.dateOfBirth}
                            placeholder="Date of birth"
                        />
                    </div>

                    <div className="p-2 border-b-2">
                        <label className="font-bold">First employment date: </label>
                        <input
                            type="date"
                            name="firstEmploymentDate"
                            defaultValue={formData.firstEmploymentDate}
                            placeholder="First employment date"
                        />
                    </div>

                    <div className="p-2 border-b-2">
                        <label className="font-bold">Last employment date: </label>
                        <input
                            type="date"
                            name="lastEmploymentDate"
                            defaultValue={formData.lastEmploymentDate}
                            placeholder="Last employment date"
                        />
                    </div>

                    <div className="p-2 border-b-2">
                        <label className="font-bold">Asked to reassign: </label>
                        <input
                            type="checkbox"
                            name="reAssign"
                            defaultValue={formData.reAssign}
                            placeholder="Asked to reassign"
                        />
                    </div>

                    <div>
                        <button className={`m-2 w-36 h-10 rounded-lg bg-none text-consid border-2 border-consid cursour-pointer font-bold text-btn ${styles.formBtn}`} type="submit">Add employee</button>
                    </div>
                </Form>
        </Modal>
    </div>
            <div>
                <ul>
                    {persons.map((person, i) => (
                        <PostCard person={person} key={i} />
                    ))}
                </ul>
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