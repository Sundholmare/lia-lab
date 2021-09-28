import { useState } from 'react';
import { usePersonContext } from 'context';

import PostCard from 'components/PostCard';
import styles from 'styles/Home.module.css';
import Form from 'components/Form';
import Layout from 'components/Layout';
import Modal from 'components/Modal/index'
import router from 'next/router';

export default function Home({ persons }) {
    const [showModal, setShowModal] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const [globalState, setGlobalState] = useState(usePersonContext());

    const resetForm = () => setGlobalState({
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
    });

    const handleToggleModal = () => {
        if (showModal) {
            setIsUpdating(false);
            resetForm()
        }
        
;        setShowModal(!showModal);
    };

    const onSubmit = async (e) => {

        // save the post
        let response = await fetch('/api/posts', {
            method: isUpdating ? 'PUT' : 'POST',
            body: JSON.stringify(globalState),
        });

        // get the data
        let data = await response.json();
        let message = '';
        if (data.success) {
            // reset the fields
            resetForm();

            // set the message
            message = 'Addition successful';
        } else {
            // set the error
            message = 'Error';
        }

        setIsUpdating(false);
        router.push(router.asPath);
        return message;
    }

    // delete funktion för att ta bort anställdas data.
    const handleDelete = async (id) => {
        // delete the id

        await fetch('/api/posts', {
            method: 'DELETE',
            body: id,
        });

        return router.push(router.asPath);
    }

    // update funktion för att ändra anställdas info.
    const handleUpdate = async (id) => {

        setIsUpdating(true);

        let response = await fetch(`/api/posts?id=${id}`, {
            method: 'GET',
        })

        let data = await response.json();

        setGlobalState(data.person);

        handleToggleModal();

        return router.push(router.asPath);
    }

    const handleChange = (e) => {
        console.log(globalState)
        setGlobalState({
            ...globalState,
            [e.target.name]: e.target.value
        })
    }

    console.log(globalState);


    return (
        <Layout toggleModal={handleToggleModal}>
            <div>
                <Modal
                    onClose={handleToggleModal}
                    show={showModal}>
                    <Form onSubmit={onSubmit} setFormData={setGlobalState} formData={globalState}>

                        <div className="p-2 border-b-2">
                            <label className="font-bold">Förnamn: </label>
                            <input
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                defaultValue={globalState.firstName}
                                placeholder="Firstname"
                                required
                            />
                        </div>

                        <div className="p-2 border-b-2">
                            <label className="font-bold">Efternamn: </label>
                            <input
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                defaultValue={globalState.lastName}
                                placeholder="Lastname"
                                required
                            />
                        </div>

                        <div className="p-2 border-b-2">
                            <label className="font-bold">Email: </label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                defaultValue={globalState.email}
                                placeholder="Email"
                            />
                        </div>

                        <div className="p-2 border-b-2">
                            <label className="font-bold">Telefonnummer: </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                onChange={handleChange}
                                defaultValue={globalState.phoneNumber}
                                placeholder="Phonenumber"
                            />
                        </div>

                        <div className="p-2 border-b-2">
                            <label className="font-bold">Närmsta chef: </label>
                            <select
                                type="text"
                                name="closestManager"
                                placeholder="Closest manager">
                                <option >Välj chef</option>
                                <option onChange={handleChange} defaultValue="Elisabeth Paulsson">Elisabeth Paulsson</option>
                                <option onChange={handleChange} defaultValue="Peter Elgåker">Peter Elgåker</option>
                            </select>
                        </div>

                        <div className="p-2 border-b-2">
                            <label className="font-bold">Kontor: </label>
                            <select
                                type="text"
                                name="officeLocation"
                                onChange={handleChange}
                                placeholder="Office location">
                                <option >Välj kontor</option>
                                <option defaultValue="Helsingborg">Helsingborg</option>
                                <option defaultValue="Malmö">Malmö</option>
                            </select>
                        </div>

                        <div className="p-2 border-b-2">
                            <label className="font-bold">Födelsedatum: </label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                onChange={handleChange}
                                defaultValue={globalState.dateOfBirth}
                                placeholder="Date of birth"
                            />
                        </div>

                        <div className="p-2 border-b-2">
                            <label className="font-bold">Första anställningsdag: </label>
                            <input
                                type="date"
                                name="firstEmploymentDate"
                                onChange={handleChange}
                                defaultValue={globalState.firstEmploymentDate}
                                placeholder="First employment date"
                            />
                        </div>

                        <div className="p-2 border-b-2">
                            <label className="font-bold">Sista anställningsdag: </label>
                            <input
                                type="date"
                                name="lastEmploymentDate"
                                onChange={handleChange}
                                defaultValue={globalState.lastEmploymentDate}
                                placeholder="Last employment date"
                            />
                        </div>

                        <div className="p-2 border-b-2">
                            <label className="font-bold">Bett om omplacering: </label>
                            <input
                                type="checkbox"
                                name="reAssign"
                                onChange={handleChange}
                                defaultValue={globalState.reAssign}
                                placeholder="Asked to reassign"
                            />
                        </div>

                        <div>
                            <button className={`m-2 w-36 m-h-12 rounded-lg bg-none text-consid border-2 border-consid cursour-pointer font-bold text-btn ${styles.formBtn}`} type="submit">{`${isUpdating ? 'Uppdatera' : 'Lägg till'} anställd`}</button>
                        </div>
                    </Form>
                </Modal>
            </div>
            <div>
                <ul>
                    {persons.map((person, i) => (
                        <PostCard person={person} key={i} handleUpdate={handleUpdate} handleDelete={handleDelete} />
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