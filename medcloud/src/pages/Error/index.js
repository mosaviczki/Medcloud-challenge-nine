import { Link } from 'react-router-dom';
import './erro.css'
import ImageError from '../../imageError.svg'

function Erro() {
    return(
        <div className='content'>
            <img src={ImageError}/>
            <h1>OPS! NÃO ENCONTRAMOS ESSA PÁGINA</h1>
            <Link to='/' className='buttonInitial'>VOLTAR AO INICIO</Link>
        </div>
    );
}

export default Erro;