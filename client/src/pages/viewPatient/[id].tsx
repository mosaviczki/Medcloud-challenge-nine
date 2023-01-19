import { useState, useEffect, useContext, FormEvent } from "react";
import { canSSRAuth } from '../../utils/canSSRAuth'
import { AuthContext } from '../../contexts/AuthContext'
import { setupAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import Router, { useRouter } from "next/router";
import Head from "next/head";
import Image from 'next/image'
import logoImg from '../../../public/medcloud.svg'
import styles from './view.module.scss'
import { Avatar, IconButton, Button, Select, MenuItem } from '@mui/material';
import Link from 'next/link';
import { api } from "../../services/apiClient";
import { Delete, Edit, Reply } from "@mui/icons-material";
import { formatDate } from "./utils";

type PatientsProps = {
    idpatient: string;
    name: string;
    birth: string;
    phone:string;
    cpf: string;
    rg: string;
    email: string;
    adress: string;
    numberAdress: string;
    district: string;
    complement: string | null;
    zipcode: string;
    city: string;
    uf: string;
}

interface HomeProps{
    patients: PatientsProps[];
}

export default function ViewPatient({patients}:HomeProps) {
    const router = useRouter();
    const { id } = router.query;
    const [description, setDescription] = useState("")
    const {user, signOut} = useContext(AuthContext)
    const [patient, setPatient] = useState<PatientsProps>()
    let letraIcon = user?.name[0]
    useEffect(() => {
        if (!router.isReady) return;
         patients.map(function (item) {
            if (item.idpatient === id) {
                setDescription(item.idpatient)
            }
        }); 
    }, [router.query.id, router.isReady]);

    api.get('/patient', {
        params:{
            idpatient: id 
        }
    }).then(response =>{
        const {idpatient,name,birth,phone, cpf, rg,email,adress,numberAdress,district,complement,zipcode,city,uf} = response.data;
        setPatient({
            idpatient,name,birth,phone, cpf, rg,email,adress,numberAdress,district,complement,zipcode,city,uf
        })
    }) 
    
    return (
        <>
            <Head>
                <title>Medcloud</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/cloud.png" />
            </Head>
            <div className={styles.container}>
                <div className={styles.side}>
                    <Image priority={true} className={styles.logo} src={logoImg} alt='logo' />
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
                                    <Link className={styles.menuItem} href="/YourAccount">MEUS DADOS</Link>
                                </MenuItem>
                                <MenuItem className={styles.menu}>
                                    <Button className={styles.menuItem} variant='text' onClick={signOut}>
                                        SAIR
                                    </Button>
                                </MenuItem>
                            </Select>
                        </Button>
                    </div>
                    <main className={styles.main}>
                        <div className={styles.return}>
                            <Link href="/dashboard"> 
                                <Reply/>
                                Voltar
                            </Link>
                        </div>
                        <div className={styles.boxPatient}>
                            <div className={styles.headMain}>
                                <h1>{patient?.name}</h1>
                                <div>
                                    <Button>
                                        <Link href={`/updatePatient/${id}`}>
                                            <Edit/>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <h1>Data de nascimento: {patient?.birth.slice(0,10)}</h1>
                            <h1>Telefone: {patient?.phone}</h1>
                            <h1>CPF: {patient?.cpf}</h1>
                            <h1>RG: {patient?.rg}</h1>
                            <h1>Email: {patient?.email}</h1>
                            <h1>Endereço: {patient?.adress}, {patient?.numberAdress} - {patient?.district} {patient?.complement}, {patient?.city} - {patient?.uf}, {patient?.zipcode}</h1>
                        </div>
                        </main>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/listAllPatients')
    return {
        props: {
            patients: response.data
        }
    }
}) 