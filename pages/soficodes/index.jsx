import styles from '../../styles/soficode.module.css'
import Link from 'next/link'

const index = ({data}) => {
    return (
        <div>
            <h1>Soficodes</h1>
            {data?.map((item) => (
                <Link href={'/soficodes/'+item.id} key={item.id}>
                    <a className={styles.single}>
                        <h3>{item.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default index


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await res.json();
    return{
        props:{data}
    }
}
