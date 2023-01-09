import './home.css';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Home() {

  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    /* Axios.post("http://localhost:3001/register", {
      name: values.name,
      birth: values.birth,
      phone: values.phone,
      cpf: values.cpf,
      rg: values.rg,
      email: values.email,
      adress: values.adress,
      numberAdress: values.numberAdress,
      district: values.district,
      complement: values.complement,
      zipcode: values.zipcode,
      city: values.city,
      uf: values.uf,
    }).then((response) => {
      console.log(response);
    }); */
  }; 

  return (
    <div class='container'>
        <div class='side'>
            <h1 class='patient'>Pacientes</h1>
        </div>
    </div>
  );
}

export default Home;