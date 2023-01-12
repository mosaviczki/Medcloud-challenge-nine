import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../medcloud.png';
import './home.css';

function Home() {

  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div class='container-home'>
        <div class='side-home'>
          <img src={Logo} className='logo'/>
          <h1 class='patient'>Pacientes</h1>
        </div>
        <div className='main'>
          <div className='box-patient'></div>
            <div className='head'>
              <Link to='/formulario' className='buttonForms'>+ INSERIR PACIENTE</Link>
            </div>
            <div className='patients'>

            </div>
        </div>
    </div>
  );
}

export default Home;