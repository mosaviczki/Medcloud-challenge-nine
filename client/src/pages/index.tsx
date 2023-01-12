import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.scss'
import logoImg from '../../public/login.png'
import { Input } from './components/ui/Input'
import { Button } from './components/ui/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Medcloud</title>
        <link rel="icon" href="/cloud.png" />
      </Head>

      <div className={styles.container}>
        <div className={styles.containerSide}>
          <Image src={logoImg} alt='logo' width={280}/>
        </div>
        <div className={styles.login}>
          <div className={styles.boxInput}>
            <h1>Login</h1>
              <form>
                <Input type="text" placeholder= "Email"/>
                <Input type="password" placeholder="Password"/>
                <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
                <Button
                  type='submit'
                  //loading={true}
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
