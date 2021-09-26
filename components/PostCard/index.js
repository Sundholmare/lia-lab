import { useState } from 'react';
import styles from 'styles/Home.module.css';

export default function PostCard({ person, handleDelete }) {

    const [display, setDisplay] = useState(false);

    // om display är true så visas hela vyn med alla egenskaper, annars bara namn och kontor
    const handleClick= () => setDisplay(!display);


    return (
            <li  className="flex flex-col border-2 border-black">
                {!display 
                ? 
                <button className="flex justify-between px-2" onClick={handleClick}><h3 className="font-bold">{`${person.firstName} ${person.lastName}`}</h3><h3>{person.officeLocation}</h3></button> 
                : 
                <section className="flex justify-between w-2/4">
                    <div>
                        <button onClick={handleClick}><h3 className="font-bold">{`${person.firstName} ${person.lastName}`}</h3></button>
                        <p><span className="font-bold">Email: </span>{person.email}</p>
                        <p><span className="font-bold">Telefonnummer:</span> {person.phoneNumber}</p>
                        <p><span className="font-bold">Närmsta chef:</span> {person.closestManager}</p>
                        <p><span className="font-bold">Kontor:</span> {person.officeLocation}</p>
                        <p><span className="font-bold">Födelsedatum:</span> {person.dateOfBirth}</p>
                        <p><span className="font-bold">Första anställningsdag:</span> {person.firstEmploymentDate}</p>
                        {person.lastEmploymentDate === '' ? null : <p><span className="font-bold">Sista anställningsdag:</span> {person.lastEmploymentDate}</p>}
                        <p><span className="font-bold">Vill bli omplacerad:</span> {person.reAssign ? 'Ja' : 'Nej'}</p>
                    </div>
                    <div>
                        <button onClick={() => handleDelete(person._id)}>Ta bort</button>
                    </div>
                </section>}
            </li>   
    );
}