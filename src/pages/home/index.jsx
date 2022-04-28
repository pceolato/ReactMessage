import { useState } from 'react'
import './styles.css'

import {Card} from '../../components/Card'

export function Home() {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState([])
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  function addMessage() {
    const newMessage = {
      name: userName,
      email: email,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      message: message
    }

    setUser(prevState => [...prevState, newMessage]) //prevState é o conteudo anterior do vetor do setstudents[]

  }

  return (
   
    <div className="container">
      <header>
        <h1>Envio de Mensagens</h1>
        </header>
        <div>
          <input type="text"
          placeholder="Nome"
          onChange={name => setUserName(name.target.value)}/>

          <input type="email"
          placeholder="Email"
          onChange={email => setEmail(email.target.value)}/>
        </div>
        <input type="text"
        placeholder="Digite uma mensagem"
        onChange={text => setMessage(text.target.value)}/>
      <button type="button" onClick={addMessage}>
        Enviar
        </button>
      
      { 
    user.map(user => (
      <Card 
        key={user.time} //Chave única, geralmente uid
        name={user.name}
        email={user.email}
        message={user.message}
        time={user.time}
      />
    ))
   }

    </div>
  )
}


