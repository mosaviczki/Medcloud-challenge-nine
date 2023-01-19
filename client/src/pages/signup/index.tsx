import Head from 'next/head'
import Image from 'next/image'
import styles from './signup.module.scss'
import logoImg from '../../../public/Cadastro.png'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import Link from 'next/link'
import {FormEvent, useState, useContext} from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'


export default function SignUp() {
  const {signUp} = useContext(AuthContext);
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [loading, setLoading] = useState(false);

  async function  handleSignUp(event: FormEvent){
    event.preventDefault();
    

    if(name === '' || phone === '' || email === '' || password === '' || confPassword === ''){
      toast.warning("Preencha todos os campos!")
      return; 
    }

    setLoading(true);

    let data = {
      name,
      phone, 
      email, 
      password, 
      confPassword
    }

    await signUp(data)

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Medcloud - Cadastro</title>
        <link rel="icon" href="/cloud.png" />
      </Head>

      <div className={styles.container}>
        <div className={styles.side}>
          <Image priority={true} src={logoImg} alt='logo' width={280} className={styles.logo}/>
        </div>
        <div className={styles.login}>
          <div className={styles.boxInput}>
            <h1>CADASTRO</h1>
              <form onSubmit={handleSignUp}>
                <Input type="text" placeholder= "Nome completo" value={name} onChange = {(e)=> setName(e.target.value)}/>
                <Input type="number" minLength={10} maxLength={11} placeholder= "Telefone" value={phone} onChange = {(e)=> setPhone(e.target.value)}/>
                <Input type="email" placeholder= "Email" value={email} onChange = {(e)=> setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha" value={password} onChange = {(e)=> setPassword(e.target.value)}/>
                <Input type="password" placeholder="Confirmar senha" value={confPassword} onChange = {(e)=> setConfPassword(e.target.value)}/>
                <Link className={styles.link} href="/">
                  Já possui uma conta? Faça login!
                </Link>
      
                <Button
                  type='submit'
                  loading={loading}
                >
                  Cadastrar
                </Button>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}
