import Head from 'next/head'
import Image from 'next/image'
import styles from './updateUser.module.scss'
import logoImg from '../../../public/medcloud.svg'
import Link from 'next/link'
import { Avatar, Select, MenuItem, Button} from '@mui/material'
import { useState, useContext, FormEvent} from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { AuthContext } from '../../contexts/AuthContext'
import { setupAPIClient } from '../../services/api'
import { Input } from '../../components/ui/Input'
import { toast } from 'react-toastify'
import { Reply } from '@mui/icons-material'

export default function UpdateUser(){
    const {user, signOut} = useContext(AuthContext)
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    let letraIcon = user?.name[0]
    let userID = user?.iduser
    //alert(userID)
    async function updateUser(event: FormEvent) {
        event.preventDefault();
        if (password === confPassword){
            if(phone === '' || email === '' || password === '' ||  confPassword === ''){
                toast.warning("Preencha todos os campos!")
            }else{
                
                try{
                    const apiUser = setupAPIClient()
                    await apiUser.put('/updUser', {
                        user_id: user?.iduser,
                        phone: phone,
                        email: email,
                        password: password,
                        confPassword: confPassword,
                    })
                    toast.success("Dados alterados!")
                }catch(err){
                    console.log(phone)
                    console.log(email)
                    console.log(err)
                    toast.error("Ops, ocorreu um erro!")
                }
            }
        }else{
            toast.error("As senhas devem ser iguais!")
        }
    }

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
                        <div className={styles.return}>
                            <Link href="/YourAccount"> 
                                <Reply/>
                                Voltar
                            </Link>
                        </div>
                        <form onSubmit={updateUser}>
                            <h1>ALTERAR DADOS</h1>
                            <Input type="number" placeholder= "Telefone" value={phone} onChange = {(e)=> setPhone(e.target.value)}/>
                            <Input type="email" placeholder= "Email" value={email} onChange = {(e)=> setEmail(e.target.value)}/>
                            <Input type="password" placeholder="Senha" value={password} onChange = {(e)=> setPassword(e.target.value)}/>
                            <Input type="password" placeholder="Confirmar senha" value={confPassword} onChange = {(e)=> setConfPassword(e.target.value)}/>
                
                            <button className={styles.save}
                                type='submit'
                            >Enviar</button>
                        </form>
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