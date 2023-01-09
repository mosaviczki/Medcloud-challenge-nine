import './form.css';
import React, { useState } from 'react';
import Logo from '../../medcloud.png';
import Axios from 'axios';

function Forms() {

    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
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
        });
    };

    return (
        <div className='container'>
            <div className='side'>
                <img src={Logo} className='logo' />
                <h1 className='patient'>Pacientes</h1>
            </div>
            <div className="main">
                <div className="patientForms">
                    <form>
                        <h1 className='title'>DADOS PESSOAIS</h1>
                        <div className="input-group">
                            <div className="input-box">
                                <label className='label--name'>
                                    Nome
                                    <input type='text' name='name' className='input--name' onChange={handleChangeValues}/>
                                </label>
                            </div>
                        </div>
                        <div className="section1">
                            <div className="input-box">
                                <label className='label-birth'>
                                    Data de nascimento
                                    <input type='date' name='birth' className='input--birth'
                                        onChange={handleChangeValues} />
                                </label>
                            </div>
                            <div className="input-box">
                                <label className='label-phone'>
                                    Telefone
                                    <input type='number' name='phone' className='input--phone'
                                        onChange={handleChangeValues} />
                                </label>
                            </div>
                            <div className="input-box">
                                <label className='label--cpf'>
                                    CPF
                                    <input type='number' name='cpf' className='input--cpf' onChange={handleChangeValues} />
                                </label>
                            </div>
                            <div className="input-box">
                                <label className='label--rg'>
                                    RG
                                    <input type='number' name='rg' className='input--rg' onChange={handleChangeValues} />
                                </label>
                            </div>
                        </div>
                        <div className="input-box">
                            <label className='label-email'>
                                Email
                                <input type='email' name='email' className='input--email' onChange={handleChangeValues} />
                            </label>
                        </div>
                        <h1 className='title'>ENDEREÇO</h1>
                        <div className="section2">
                            <div className="input-box">
                                <label className='label-adress'>
                                    Endereço
                                    <input type='text' name='adress' className='input--adress' onChange={handleChangeValues} />
                                </label>
                            </div>
                            <div className="input-box">
                                <label className='label-numberAdress'>
                                    Numero do endereço
                                    <input type='number' name='numberAdress' className='input--numberAdress'
                                        onChange={handleChangeValues} />
                                </label>
                            </div>
                            <div className="input-box">
                                <label className='label-district'>
                                    Bairro
                                    <input type='text' name='district' className='input--district' onChange={handleChangeValues} />
                                </label>
                            </div>
                            <div className="input-box">
                                <label className='label-complement'>
                                    Complemento
                                    <input type='text' name='complement' className='input--complement'
                                        onChange={handleChangeValues} />
                                </label>
                            </div>
                        </div>
                        <div className="section3">
                            <div className="input-box">
                                <label className='label-zipcode'>
                                    CEP
                                    <input type='text' name='zipcode' className='input--zipcode'  onChange={handleChangeValues}/>
                                </label>
                            </div>
                            <div className="input-box">
                                <label className='label-city'>
                                    Cidade
                                    <input type='text' name='city' className='input--city' onChange={handleChangeValues} />
                                </label>
                            </div>
                            <div className="input-box">
                                <label className='label--uf'>
                                    UF
                                    <input type='text' name='uf' className='input--uf' onChange={handleChangeValues} />
                                </label>
                            </div>
                        </div>
                        <div className="button-save">
                            <button className='save' type='submit' onClick={() => handleClickButton()}>SALVAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Forms;