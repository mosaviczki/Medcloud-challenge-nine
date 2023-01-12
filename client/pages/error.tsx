import Head from 'next/head'
import Image from 'next/image'

export default function Erro() {
    return(
        <>
            <Head>
                <title>Medcloud</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/cloud.png" />
            </Head>
            <div className='content'>
                <img src='/imageError.svg' width={400}/>
                <h1>OPS! NÃO ENCONTRAMOS ESSA PÁGINA</h1>
            </div>
        </>
    )
}
//<Link to='/' className='buttonInitial'>VOLTAR AO INICIO</Link>