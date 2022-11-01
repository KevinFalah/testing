import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import { GlobalContext } from "./Context";

const HomeDua = () => {
  const navigate = useNavigate();
  // const [dataRegis, setDataRegis] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const [dataLogin, setDataLogin] = useState({
  //   email: "",
  //   password: "",
  // });

  let {state} = useContext(GlobalContext)

  let {
    dataRegis,
    setDataRegis,
    dataLogin,
    setDataLogin
  } = state

  const handleInputRegis = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setDataRegis({
      ...dataRegis,
      [name]: value,
    });
  };

  const handleInputLogin = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      console.log(dataRegis);
      const { name, email, password } = dataRegis;

      // const body = JSON.stringify(dataRegis)
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "https://backendexample.sanbersy.com/api/register",
        { name, email, password }
      );

      if (response.status == 200) {
        alert("berhasil");
        console.log(dataRegis);

        setDataRegis({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
      alert("regis gagal");
    }
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const { email, password } = dataLogin;

      const response = await axios.post(
        "https://backendexample.sanbersy.com/api/user-login",
        { email, password }
      );
      
      setDataLogin({
        email: "",
        password: "",
      });
      let {token} = response.data
      Cookies.set('token', token)
      navigate('/')
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  return (
    <>

      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          background: "#222",
          alignContent: "center",
          padding: "1rem 0",
          // flexDirection:"column"
        }}
      >
        <div>
          <div
            style={{
              background: "salmon",
              borderRadius: "10px",
              boxShadow: "10px 10px 10px rgba(0,0,0,0.181)",
              width: "300px",
              height: "250px",
              textAlign: "center",
            }}
          >
            <h1>Registrasi</h1>
            <form onSubmit={handleRegister}>
              <label htmlFor="nama">Nama</label>
              <br />
              <input onChange={handleInputRegis} type="text" name="name" />
              <br />
              <label htmlFor="email">email</label>
              <br />
              <input onChange={handleInputRegis} type="email" name="email" />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                onChange={handleInputRegis}
                type="password"
                name="password"
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Login */}
          <div
            style={{
              background: "salmon",
              borderRadius: "10px",
              boxShadow: "10px 10px 10px rgba(0,0,0,0.181)",
              width: "300px",
              height: "200px",
              textAlign: "center",
            }}
          >
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">email</label>
              <br />
              <input
                value={dataLogin.email}
                onChange={handleInputLogin}
                type="email"
                name="email"
              />
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                value={dataLogin.password}
                onChange={handleInputLogin}
                type="password"
                name="password"
              />
              <br />
              <button type="submit">Submit Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDua;
