import Head from 'next/head'
import Image from 'next/image'
import styles from './insert.module.scss'
import logoImg from '../../../public/medcloud.svg'
import Link from 'next/link'
import { Avatar, Button, Select, MenuItem} from '@mui/material'
import {Delete, Edit} from '@mui/icons-material'
import { useState, useContext } from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { AuthContext } from '../../contexts/AuthContext'
import { Input } from '../../components/ui/Input'

export default function Insert(){
    const {user, signOut} = useContext(AuthContext)
    let letraIcon = user?.name[0]
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");
    const [numberAdress, setNumberAdress] = useState(0);
    const [district, setDistrict] = useState("");
    const [complement, setComplement] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [loading, setLoading] = useState(false);

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
                    <div className={styles.main}>
                        <form className={styles.form}>
                            <h1 className={styles.title}>DADOS PESSOAIS</h1>
                            <div className={styles.inputGroup}>
                                <div className={styles.inputBox}>
                                    <label >
                                        Nome
                                        <Input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                                    </label>
                                </div>
                                <div className={styles.section1}>
                                    
                                <div className={styles.inputBox}>
                                        <label>
                                            Data de nascimento
                                            <Input type="date" value={birth} onChange = {(e)=> setBirth(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Telefone
                                            <Input type="number" value={phone} onChange = {(e)=> setPhone(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            CPF
                                            <Input type="number" value={cpf} onChange = {(e)=> setCpf(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            RG
                                            <Input type="number" value={rg} onChange = {(e)=> setRg(e.target.value)}/>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.inputBox}>
                                    <label>
                                        Email
                                    <Input type="text" placeholder= "Email" value={email} onChange = {(e)=> setEmail(e.target.value)}/>
                                    </label>
                                </div>    
                                <h1 className={styles.Adress}>ENDEREÇO</h1>
                                <div className={styles.section2}>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Logradouro
                                            <Input type="text" value={adress} onChange = {(e)=> setAdress(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Numero
                                            <Input type="number" value={numberAdress} onChange = {(e)=> setNumberAdress(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Bairro
                                            <Input type="text" value={district} onChange = {(e)=> setDistrict(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Complemento 
                                            <Input type="text" value={complement} onChange = {(e)=> setComplement(e.target.value)}/>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.section3}>
                                    <div className={styles.inputBox}>
                                        <label>
                                            CEP
                                            <Input type="number"  value={zipcode} onChange = {(e)=> setZipcode(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Cidade
                                            <Input type="text" value={city} onChange = {(e)=> setCity(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            UF
                                            <Input type="UF" placeholder= "" value={uf} onChange = {(e)=> setUf(e.target.value)}/>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.buttonSave}>
                                    <button className={styles.save}>SALVAR</button>
                                </div>  
                            </div>
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