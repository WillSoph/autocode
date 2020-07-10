import React, { useState } from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import axios from 'axios'

export default function Footer() {

    const [values, setValues] = useState({ name: '', email: '', message: '' })

    const handleImputChange = e => {
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
                            <label htmlFor="name">Nome</label>
                            <input type="text" name="name" id="name" onChange={handleImputChange} onFocus={handleImputChange} />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" onChange={handleImputChange} onFocus={handleImputChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Mensagem</label>
                            <textarea name="message" id="message" rows="6"></textarea>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Enviar Mensagem" className="alt" /></li>
                        </ul>
                        <p>Se você já possui uma conta, <Link href="/login"><a title="Logar">Clique aqui</a></Link> para fazer o login.</p>
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