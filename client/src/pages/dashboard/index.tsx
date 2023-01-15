import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/dashboard.module.scss'
import logoImg from '../../../public/medcloud.svg'
import Link from 'next/link'
import { Tooltip, Avatar, IconButton, Button, Select, MenuItem} from '@mui/material'
import {Delete, Add, Edit} from '@mui/icons-material'
import { useContext } from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { AuthContext } from '../../contexts/AuthContext'

export default function Dashboard(){
    const {user, signOut} = useContext(AuthContext)
    let letraIcon = user?.name[0]

    return(
        <>
            <Head>
                <title>Medcloud</title>
                <link rel="icon" href="/cloud.png"/>
            </Head>
            <div className={styles.container}>
                <div className={styles.side}>
                    <Image className={styles.logo} src={logoImg} alt='logo'/>
                    <Link className={styles.pacient} href="/dashboard">Pacientes</Link>
                </div>
                <div className={styles.containerMain}>
                    <head>
                        <Button className={styles.me} variant="text" startIcon={<Avatar>{letraIcon}</Avatar>}>
                            <Select
                                className={styles.select}
                                variant="filled"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                //onChange={handleChange}
                            >
                                <MenuItem className={styles.menu} value={20}>
                                    <Link  className={styles.menuItem} href="/YourAccount">MEUS DADOS</Link> 
                                </MenuItem>
                                <MenuItem className={styles.menu} value={30}>
                                    <Button className={styles.menuItem} variant='text' onClick={signOut}>
                                        SAIR
                                    </Button>
                                </MenuItem>
                            </Select>
                        </Button>
                    </head>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async(ctx) =>{
    return{
        props:{}
    }
})