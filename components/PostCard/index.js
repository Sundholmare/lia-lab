import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from 'styles/Home.module.css';

export default function PostCard({ post }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    return (
            <li className={styles.listItem}>
                <h3>Namn: {`${post.firstName} ${post.lastName}`}</h3>
                <p>Email: {post.email}</p>  
                <p>Telefonnummer: {post.phoneNumber}</p>  
                <p>Närmsta chef: {post.closestManager}</p>  
                <p>Kontor: {post.officeLocation}</p>  
                <p>Födelsedatum: {post.dateOfBirth}</p>  
                <p>Första anställningsdag: {post.firstEmploymentDate}</p>
                <p>Sista anställningsdag: {post.lastEmploymentDate}</p>
                <p>Vill bli omplacerad: {post.reAssign ? 'Ja' : 'Nej'}</p>
            </li>   
    );
}