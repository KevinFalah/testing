import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [dataRegister, setDataRegister] = useState({
        name:"",
        email:"",
        password:""
    })

    const [dataLogin, setDataLogin] = useState({
        email:"",
        password:""
    })

    const handleInputRegister = (e) => {
        let value = e.target.value
        let name = e.target.name
        
        setDataRegister({
            ...dataRegister, 
            [name]:value
        })
    }

    const handleInputLogin = (e) => {
        let value = e.target.value
        let name = e.target.name
        
        setDataLogin({
            ...dataLogin,
            [name] : value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();

        const {name, email, password} = dataRegister

        axios.post('https://backendexample.sanbersy.com/api/register', {name, email, password})
        .then((res) => {
            console.log('ini regis :', res)
            alert('regis berhasil')
            setDataRegister({
                name:"",
                email:"",
                password:""
            })
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        let {email, password} = dataLogin

        console.log(dataLogin)

        axios.post('https://backendexample.sanbersy.com/api/user-login', {email, password})
        .then((res) => {
            console.log('ini login : ',res)
            alert('login berhasil')
        })
        .catch((err) => {
            console.log(err)
        })


        setDataLogin({
            email:"",
            password:""
        })
    }

  return (
    <>
        <h2>Utama</h2>
    </>
    // <>
    // <h1>Register</h1>
    // <form onSubmit={handleRegister}>
    //     <label>Name</label><br />
    //     <input value={dataRegister.name} onChange={handleInputRegister} type="text" name='name'/><br />
    //     <label>Email</label><br />
    //     <input value={dataRegister.email} onChange={handleInputRegister} type="email" name='email'/><br />
    //     <label>Password</label><br />
    //     <input value={dataRegister.password} onChange={handleInputRegister} type="password"  name='password'/><br />
    //     <button type='submit'>Submit</button>
    // </form>

    // <br />
    // <h1>Login</h1>
    // <form onSubmit={handleLogin}>
    //     <label>Email</label><br />
    //     <input value={dataLogin.email} onChange={handleInputLogin} type="email" name='email'/><br />
    //     <label>Password</label><br />
    //     <input value={dataLogin.password} onChange={handleInputLogin} type="password"  name='password'/><br />
    //     <button type='submit'>Submit</button>
    // </form>
    // </>
  )
}

export default Home