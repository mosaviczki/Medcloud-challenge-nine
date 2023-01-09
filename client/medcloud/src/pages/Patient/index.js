import React, { useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import Logo from '../../medcloud.png';
import './patient.css';

function Patient() {

  const [values, setValues] = useState();
  const {id} = useParams();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div class='container'>
        <div class='side'>
          <img src={Logo} className='logo'/>
          <h1 class='patient'>Pacientes</h1>
        </div>
        <div className='main'>
          <div className='box-patient'></div>
            <div className='head'>
              <Link to='/' className='buttonForms'>Voltar</Link>
            </div>
            <div className='patients'>
            </div>
        </div>
    </div>
  );
}

export default Patient;