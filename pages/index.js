import PostCard from '../components/PostCard';
import styles from '../styles/Home.module.css';
import AddPost from '../pages/add-post';

export default function Home({ persons }) {
    return (
        <div>
            <main>
                <div className={styles.container}>
                        <ul>
                            {persons.map((person, i) => (
                                <PostCard post={person} key={i} />
                            ))}
                        </ul>
                          <AddPost />
                </div>
            </main>
        </div>
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