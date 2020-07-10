import React, { useState } from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import axios from 'axios'

export default function Footer() {

    const [values, setValues] = useState({ name: '', email: '' })

    const handleInputChange = e => {
        const { name, value } = e.target

        setValues({ ...values, [name]: value })

    }

    const handleFormSubmit = e => {
        e.preventDefault()


        //axios.post('http://localhost:3333/users', values).then( res => {
        axios.post('https://autocode-adonis.herokuapp.com/auths', values).then(res => {

            alert(`Ola ${res.data.name} seus dados cadastrados com sucesso ID: ${res.data.id}`)
            window.location.href = ("/index") // Redireciona para a pagina login
        }).catch(err => console.log("Erro de Cadastro", err))

    }

    return (
        <>
            <Header />
            <section id="footer">
                <div className="inner">
                    <header>
                        <h2>Entre em Contato</h2>
                    </header>
                    <form onSubmit={handleFormSubmit}>
                        <div className="field half first">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" onChange={handleInputChange} onFocus={handleInputChange} />
                        </div>
                        <div className="field half">
                            <label htmlFor="password">Senha</label>
                            <input type="text" name="password" id="password" onChange={handleInputChange} onFocus={handleInputChange} />
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Logar no Sistema" className="alt" /></li>
                        </ul>
                        <p>Você ainda não tem uma conta? <Link href="/register"><a title="Cadastre-se">Clique aqui</a></Link> e cadastre-se.</p>
                    </form>
                    <div className="copyright">
                        &copy; Auto Code: Desenvolvido por Will - <a
                            href="https://hcode.com.br/">HCodeLab</a>
                    </div>
                </div>
            </section>

        </>
    )
}