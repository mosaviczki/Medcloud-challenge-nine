import './form.css';
import React, { useState } from 'react'

function Forms() {

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
        <div class="main">
            <div class="patientForms">
                <form>
                    <h1 class='title'>DADOS PESSOAIS</h1>
                    <div class="input--group">
                        <div class="input--box">
                            <label class='label--name'>
                                Nome
                                <input type='text' name='name' class='input--name' onChange={handleChangeValues}/>
                            </label>
                        </div>       
                    </div>
                    <div class="section1">
                        <div class="input--box">
                            <label class='label--birth'>
                                Data de nascimento
                                <input type='date' name='birth' class='input--birth'
                                    onChange={handleChangeValues}/>
                            </label>
                        </div>
                        <div class="input--box">
                            <label class='label--phone'>
                                Telefone
                                <input type='number' name='phone' class='input--phone'
                                    onChange={handleChangeValues} />
                            </label>
                        </div>
                        <div class="input--box">
                            <label class='label--cpf'>
                                CPF
                                <input type='number' name='cpf' class='input--cpf' onChange={handleChangeValues} />
                            </label>
                        </div>
                        <div class="input--box">
                            <label class='label--rg'>
                                RG
                                <input type='number' name='rg' class='input--rg' onChange={handleChangeValues} />
                            </label>
                        </div>
                    </div>
                    <div class="input--box">
                        <label class='label--email'>
                            Email
                            <input type='email' name='email' class='input--email' onChange={handleChangeValues}/>
                        </label>
                    </div>
                    <h1 class='title'>ENDEREÇO</h1>
                    <div class="section2">
                        <div class="input--box">
                            <label class='label--adress'>
                                Endereço
                                <input type='text' name='adress' class='input--adress'  onChange={handleChangeValues}/>
                            </label>
                        </div>
                        <div class="input--box">
                            <label class='label--numberAdress'>
                                Numero do endereço
                                <input type='number' name='numberAdress' class='input--numberAdress'
                                     onChange={handleChangeValues}/>
                            </label>
                        </div>
                        <div class="input--box">
                            <label class='label--district'>
                                Bairro
                                <input type='text' name='district' class='input--district' onChange={handleChangeValues} />
                            </label>
                        </div>
                        <div class="input--box">
                            <label class='label--complement'>
                                Complemento
                                <input type='text' name='complement' class='input--complement'
                                   onChange={handleChangeValues}/>
                            </label>
                        </div>
                    </div>
                    <div class="section3">
                        <div class="input--box">
                            <label class='label--zipcode'>
                                CEP
                                <input type='number' name='zipcode' class='input--zipcode'  onChange={handleChangeValues}/>
                            </label>
                        </div>
                        <div class="input--box">
                            <label class='label--city'>
                                Cidade
                                <input type='text' name='city' class='input--city' onChange={handleChangeValues} />
                            </label>
                        </div>
                        <div class="input--box">
                            <label class='label--uf'>
                                UF
                                <input type='text' name='uf' class='input--uf' onChange={handleChangeValues} />
                            </label>
                        </div>
                    </div>
                    <div class="button-save">
                        <button class='save' type='submit' onClick={() => handleClickButton()}>SALVAR</button>
                    </div>                
                </form>
            </div>
        </div>
    </div>
  );
}

export default Forms;