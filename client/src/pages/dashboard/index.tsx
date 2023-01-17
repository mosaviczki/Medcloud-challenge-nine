import Head from 'next/head'
import Image from 'next/image'
import styles from './dashboard.module.scss'
import logoImg from '../../../public/medcloud.svg'
import Link from 'next/link'
import { Avatar, IconButton, Button, Select, MenuItem} from '@mui/material'
import {Delete, Add} from '@mui/icons-material'
import { useContext, useState } from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { AuthContext } from '../../contexts/AuthContext'
import { setupAPIClient } from '../../services/api'
import { toast } from 'react-toastify'

type PatientsProps ={
    idpatient: string;
    name: string;
    birth: string;
    email: string;
    adress: string;
    numberAdress: string;
    district:string;
    complement:string | null;
    zipcode: string;
    city : string;
    uf: string;
    user_id: string
}

interface HomeProps{
    patients: PatientsProps[];
}

export default function Dashboard({patients}: HomeProps){
    const apiClient = setupAPIClient();
    const [patList, setPatList] = useState(patients || [])
    const [patientsList, setPatientsList] = useState(patients || [])
    const {user, signOut} = useContext(AuthContext)
    let letraIcon = user?.name[0]


    async function detPatient(id: string) {
        const resp = await apiClient.get('/listAllPatients', {
            params:{
                user_id: user?.iduser,
            }
        });
        setPatList(resp.data)
    }



    async function deletePatient(id: string){
        const apiClient = setupAPIClient();
        alert(id)
        const response = await apiClient.delete('/patientDelete',{
            params:{
                idpatient: id,
            }
        })
        const resp = await apiClient.get('/listAllPatients');
        setPatientsList(resp.data)
        toast.success("Deletado")
    }

    return(
        <>
            <Head>
                <title>Medcloud</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/cloud.png" />
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
                                //onChange={handleChange}
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
                    <main className={styles.main}>
                        <Button className={styles.buttonInsert} variant="contained">
                            <Add/>
                            <Link className={styles.link} href="/insert">INSERIR NOVO PACIENTE</Link>
                        </Button>
                        {patList.map( item => (
                            <section key={item.idpatient} className={styles.patientList}>
                                <Button>
                                    <Link href={`/patient/${item.idpatient}`}>Teste</Link>
                                    <div className={styles.headPatient}>
                                        <h1>{item.name}</h1>
                                        <IconButton className={styles.delIcon} onClick={() => deletePatient(item.idpatient)}/*onClick={() => setOpen(false)}*/>
                                            <Delete/>
                                        </IconButton>
                                    </div>
                                    <div className={styles.contentPatient}>
                                        <p className={styles.p}>Data de nascimento: {item.birth.slice(0,10)}</p>
                                        <p>Email: {item.email}</p>
                                        <p>
                                            Endereço: {item.adress}, {item.numberAdress} - {item.district} {item.complement}, {item.city} - {item.uf}, {item.zipcode}
                                        </p>
                                    </div>
                                </Button>
                            </section>
                        ))}
                        
                    </main>
                </div>
            </div>
        </>
    )
}
export const getServerSideProps = canSSRAuth(async(ctx) =>{
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/listAllPatients')
    return{
        props:{
            patients: response.data
        } 
    }
})