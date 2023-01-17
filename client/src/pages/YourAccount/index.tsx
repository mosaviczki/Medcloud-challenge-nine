import Head from 'next/head'
import Image from 'next/image'
import styles from './youraccount.module.scss'
import logoImg from '../../../public/medcloud.svg'
import Link from 'next/link'
import { Avatar, Button, Select, MenuItem} from '@mui/material'
import {Delete, Add, Edit} from '@mui/icons-material'
import { useState, useContext } from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { AuthContext } from '../../contexts/AuthContext'
import { Input } from '../../components/ui/Input'
import { NewPassword, NewPhone, NewEmail, DeleteUser } from '../dialog/updateUser'

export default function Insert(){
    const {user, signOut} = useContext(AuthContext)
    const [openPhone, setOpenPhone] = useState(false);
    const [openEmail, setOpenEmail] = useState(false);
    const [openPassword,setOpenPassword] = useState(false);
    const [openDelete,setOpenDelete] = useState(false);
    
    
    let letraIcon = user?.name[0]

    return(
        <>
            <Head>
                <title>Medcloud</title>
                <link rel="icon" href="/cloud.png"/>
            </Head>
            <div className={styles.container}>
                <div className={styles.side}>
                    <Image priority={true} className={styles.logo} src={logoImg} alt='logo'/>
                    <Link className={styles.pacient} href="/dashboard">Pacientes</Link>
                </div>
                <div className={styles.containerMain}>
                    <div className={styles.head}>
                        <Button className={styles.me} variant="text" startIcon={<Avatar>{letraIcon}</Avatar>}>
                            <Select
                                className={styles.select}
                                variant="filled"
                            >
                                <MenuItem className={styles.menu}>
                                    <Link  className={styles.menuItem} href="/YourAccount">MEUS DADOS</Link> 
                                </MenuItem>
                                <MenuItem className={styles.menu}>
                                    <Button className={styles.menuItem} variant='text' onClick={signOut}>
                                        SAIR
                                    </Button>
                                </MenuItem>
                            </Select>
                        </Button>
                    </div>
                    <div className={styles.main}>
                        <h1>MEUS DADOS</h1>
                        <h2>
                            Nome: {user?.name}
                        </h2>
                        <h2>
                            Telefone: {user?.phone} 
                            <Button variant='text' onClick={() => setOpenPhone(true)}>
                                < Edit/> 
                            </Button>
                            
                        </h2> 
                        <h2>
                            Email: {user?.email} 
                            <Button variant='text' onClick={() => setOpenEmail(true)}>
                                < Edit/> 
                            </Button>
                        </h2> 
                        <Button variant='text' onClick={() => setOpenPassword(true)}>
                            Trocar senha
                        </Button>
                        <Button variant='contained' onClick={() => setOpenDelete(true)}>
                            Excluir conta
                        </Button>
                        <NewPhone open={openPhone} setOpen={setOpenPhone}/>
                        <NewEmail open={openEmail} setOpen={setOpenEmail}/>
                        <NewPassword open={openPassword} setOpen={setOpenPassword}/>
                        <DeleteUser open={openDelete} setOpen={setOpenDelete}/>
                        
                    </div>
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