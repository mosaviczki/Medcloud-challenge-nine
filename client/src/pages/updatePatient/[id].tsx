import { useState, useEffect, useContext, FormEvent } from "react";
import { canSSRAuth } from '../../utils/canSSRAuth'
import { AuthContext } from '../../contexts/AuthContext'
import { setupAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { useRouter } from "next/router";
import Head from "next/head";
import Image from 'next/image'
import logoImg from '../../../public/medcloud.svg'
import styles from './patient.module.scss'
import { Avatar, Button, Select, MenuItem } from '@mui/material';
import Link from 'next/link';
import { Input } from "../../components/ui/Input";
import { Reply } from "@mui/icons-material";

type PatientsProps = {
    idpatient: string;
    name: string;
    birth: string;
    email: string;
    adress: string;
    numberAdress: string;
    district: string;
    complement: string | null;
    zipcode: string;
    city: string;
    uf: string;
}

interface HomeProps {
    patients: PatientsProps[];
}

export default function UpdatePatient({ patients }: HomeProps) {
    const router = useRouter();
    const { id } = router.query;
    const [description, setDescription] = useState("")
    const { user, signOut } = useContext(AuthContext)
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");
    const [numberAdress, setNumberAdress] = useState("");
    const [district, setDistrict] = useState("");
    const [complement, setComplement] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    let letraIcon = user?.name[0]

    useEffect(() => {
        if (!router.isReady) return;
        patients.map(function (item) {
            if (item.idpatient === id) {
                setDescription(item.idpatient)
            }
        });

    }, [router.query.id, router.isReady]);

    async function updatePatient(event: FormEvent) {
        event.preventDefault();
        try {
            const apiClient = setupAPIClient()
            await apiClient.put('/patientUpdate', {
                idpatient: id,
                phone: phone,
                email: email,
                adress: adress,
                numberAdress: numberAdress,
                district: district,
                complement: complement,
                zipcode: zipcode,
                city: city,
                uf: uf
            })
            toast.success("Dados alterados!")
            router.push('/')
        } catch (err) {
            console.log(err)
            toast.error("Ops!")
        }
    }

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
                        <form onSubmit={updatePatient}>
                            <h1>ALTERAR DADOS</h1>
                            <section className={styles.primarySec}>
                                <Input type="number" placeholder="TELEFONE" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <Input type="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </section>
                            <section className={styles.secundSec}>
                                <Input className={styles.adress} type="text" placeholder="LOGRADOURO" value={adress} onChange={(e) => setAdress(e.target.value)} />
                            </section>
                            <section className={styles.thirdSec}>
                                <Input type="number" placeholder="NUMERO" name={'numberAdress'} value={numberAdress} onChange={(e) => setNumberAdress(e.target.value)} />
                                <Input type="text" placeholder="BAIRRO" value={district} onChange={(e) => setDistrict(e.target.value)} />
                                <Input type="text" placeholder="COMPLEMENTO" value={complement} onChange={(e) => setComplement(e.target.value)} />
                                <Input type="number" placeholder="CEP" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                                <Input type="text" placeholder="CIDADE" value={city} onChange={(e) => setCity(e.target.value)} />
                                <Input type="UF" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
                            </section>
                            

                            <button className={styles.save}
                                type='submit'
                            >Enviar</button>
                        </form>
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