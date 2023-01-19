import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.scss'
import logoImg from '../../public/medcloud.svg'
import { canSSRGuest } from '../utils/canSSRGuest'

import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import Link from 'next/link'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { toast } from 'react-toastify'
import RotateRight from '@mui/icons-material/RotateRight'

export default function Home() {
  const {signIn} = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent){
    event.preventDefault();
    
    if(email === '' || password === ''){
      toast.warning("Preencha todos os dados!")
      return;
    }

    setLoading(true);

    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Medcloud - Login</title>
        <link rel="icon" href="/cloud.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.containerSide}>
          <Image priority={true} src={logoImg} alt='logo' className={styles.logo}/>
          <div className={styles.textSide}>
            <h1>SEUS EXAMES</h1>
            <h1>EM NUVEM</h1>
          </div>
        </div>
        <div className={styles.login}>
          <div className={styles.boxInput}>
            <h1>LOGIN</h1>
              <form onSubmit={handleLogin}>
                <Input type="email" placeholder= "Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <Input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

                <Link className={styles.link} href="/signup">
                  Não possui uma conta? Cadastre-se
                </Link>
      
                <Button
                  type='submit'
                  loading={loading}
                >
                  Login
                </Button>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) =>{
  return{
    props: {}
  }
})

