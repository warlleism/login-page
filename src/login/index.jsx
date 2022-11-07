import React from "react"
import { useState } from "react";
import "./index.scss"

const Login = () => {


    const [config, setConfig] = useState([])
    const [register, setRegister] = useState([])

    const [login, setLogin] = useState(0)

    const options = {
        body: JSON.stringify(config),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const OptionsRegister = {
        body: JSON.stringify(register),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };


    const LoginAuth = async (event) => {

        event.preventDefault()

        await fetch('http://localhost:3001/read', options)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const RegisterUser = async (event) => {

        event.preventDefault()

        await fetch('http://localhost:3001/create', OptionsRegister)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="main-conteiner">

            <div className="container-info" style={{ transform: `translateX(${login}%)` }}>
                <div className="input-botom input" style={{cursor: "pointer"}} onClick={() => setLogin(0)}>Sing Up</div>
                <div className="input-botom input" style={{cursor: "pointer"}} onClick={() => setLogin(-100)}>Login</div>
            </div>

            <form action="POST">
                <div className="Welcome">
                    Welcome! Sing Up
                </div>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Name" name="name" id='name' onBlur={(event) => setRegister({ ...register, name: event.target.value })} />
                    <label for="name" className="form__label">Name</label>
                </div>
                <div className="form__group field">
                    <input type="input" className="form__field" autoComplete="none" placeholder="Name" name="name" id='name' onBlur={(event) => setRegister({ ...register, email: event.target.value })} />
                    <label for="name" className="form__label">Email</label>
                </div>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Name" name="name" id='name' onBlur={(event) => setRegister({ ...register, password: event.target.value })} />
                    <label for="name" className="form__label">Password</label>
                </div>
                <div className="input-botom" type="submit" style={{ cursor: "pointer" }} onClick={(event) => RegisterUser(event)}>Sing up</div>
            </form>

            <form action="POST">
                <div className="Welcome">
                    Welcome back!
                </div>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Name" name="name" id='name' onBlur={(event) => setConfig({ ...config, email: event.target.value })} />
                    <label for="name" className="form__label">Email</label>
                </div>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Name" name="name" id='name' onBlur={(event) => setConfig({ ...config, password: event.target.value })} />
                    <label for="name" className="form__label">Password</label>
                </div>
                <div className="input-botom" type="submit" style={{ cursor: "pointer" }} onClick={(event) => LoginAuth(event)}>Login</div>
            </form>

        </div>
    )
}

export default Login;