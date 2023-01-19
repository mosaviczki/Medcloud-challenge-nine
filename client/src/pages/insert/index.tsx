import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './insert.module.scss'
import logoImg from '../../../public/medcloud.svg'
import { setupAPIClient } from '../../services/api'

import { Avatar, Button, Select, MenuItem} from '@mui/material'
import { useState, FormEvent, useContext} from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { AuthContext } from '../../contexts/AuthContext'
import { Input } from '../../components/ui/Input'
import { toast } from 'react-toastify'

export default function Insert(){
    const {user, signOut} = useContext(AuthContext)
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");
    const [numberAdress, setNumberAdress] = useState("");
    const [district, setDistrict] = useState("");
    const [complement, setComplement] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    let letraIcon = user?.name[0]

    let asterisk = "*"

    async function handleRegister(event: FormEvent) {
        event.preventDefault();
        try{
            if (name === '' || phone === '' || birth === '' || cpf === '' ||rg === '' ||email === '' ||adress === '' || numberAdress === '' || district === '' ||zipcode === '' ||city === '' ||uf === '' ){
                toast.error("Preencha todos os campos!")
                return;
            }

            const apiClient = setupAPIClient();
            await apiClient.post('/insert',{
                name: name,  
                birth: (birth+"T00:00:00.365Z"), 
                phone: phone, 
                cpf: cpf, 
                rg: rg, 
                email: email, 
                adress: adress, 
                numberAdress: numberAdress, 
                district: district, 
                complement: complement, 
                zipcode: zipcode, 
                city: city, 
                uf: uf, 
                user_id: user?.iduser
            })
            

        }catch(err){
            alert(user?.iduser)
            toast.error("Ops, erro ao cadastrar!")
            return;
        }
        
        setName("")
        setBirth("")
        setPhone("")
        setCpf("")
        setRg("")
        setEmail("")
        setAdress("")
        setNumberAdress("")
        setDistrict("")
        setComplement("")
        setZipcode("")
        setCity("")
        setUf("")
        toast.success('Cliente cadastrado com sucesso')


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
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
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
                        <form className={styles.form} onSubmit={handleRegister}>
                            <h1 className={styles.title}>DADOS PESSOAIS</h1>
                            <div className={styles.inputGroup}>                    
                                <div className={styles.inputBox}>
                                    <label >
                                        Nome {asterisk}
                                        <Input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                                    </label>
                                </div>
                                <div className={styles.section1}>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Data de nascimento {asterisk}
                                            <Input type="date" value={birth} onChange = {(e)=> setBirth(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Telefone {asterisk}
                                            <Input type="number" minLength={11} maxLength={11} value={phone} onChange = {(e)=> setPhone(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            CPF {asterisk}
                                            <Input type="number" minLength={11} maxLength={11} value={cpf} onChange = {(e)=> setCpf(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            RG {asterisk}
                                            <Input type="number" value={rg} onChange = {(e)=> setRg(e.target.value)}/>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.inputBox}>
                                    <label>
                                        Email {asterisk}
                                        <Input type="email" placeholder= "Email" value={email} onChange = {(e)=> setEmail(e.target.value)}/>
                                    </label>
                                </div>    
                                <h1 className={styles.Adress}>ENDEREÇO</h1>
                                <div className={styles.section2}>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Logradouro {asterisk}
                                            <Input type="text" value={adress} onChange = {(e)=> setAdress(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Numero {asterisk}
                                            <Input type="number" name={'numberAdress'} value={numberAdress} onChange = {(e)=> setNumberAdress(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Bairro {asterisk}
                                            <Input type="text" value={district} onChange = {(e)=> setDistrict(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Complemento 
                                            <Input type="text" value={complement} onChange={(e)=> setComplement(e.target.value)}/>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.section3}>
                                <div className={styles.inputBox}>
                                        <label>
                                            CEP {asterisk}
                                            <Input type="number" minLength={8} maxLength={8} value={zipcode} onChange = {(e)=> setZipcode(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            Cidade {asterisk}
                                            <Input type="text" value={city} onChange = {(e)=> setCity(e.target.value)}/>
                                        </label>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label>
                                            UF {asterisk}
                                            <Input type="UF" minLength={2} maxLength={2} placeholder= "" value={uf} onChange = {(e)=> setUf(e.target.value)}/>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.buttonSave}>
                                    <button className={styles.save} /* onClick={handleRegister} */>SALVAR</button>
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