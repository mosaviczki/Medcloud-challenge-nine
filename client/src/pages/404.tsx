import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/error.module.scss'

export default function Erro() {
    return(
        <>
            <Head>
                <title>Medcloud</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/cloud.png" />
            </Head>
            <div className={styles.content}>
                <img priority={true} src='/imageError.svg' width={400}/>
                <h1>OPS! NÃO ENCONTRAMOS ESSA PÁGINA</h1>
                <Link href='/' className={styles.buttonInitial}>VOLTAR AO INICIO</Link>
            </div>
        </>
    )
}