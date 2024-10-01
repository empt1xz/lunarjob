import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('Developer'); // Inicializando com 'Developer'
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dados do formulário
    const payload = {
      username,
      role,
    };

    // Enviar para a webhook do Discord
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1287415084905402480/_xj8stTKAHCLkjprYJxQCN8-f1ceBrIp9sPigVl8JxR85ergGLFRLc5JCuoo-x-0kpK-';

    try {
      await fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `Solicitação de Registro: \nNome de usuário: ${username}\nCargo: ${role} \n Email: ${email}`,
        }),
      });
      alert('Sua solicitação foi enviada, dentro de 12h Seu email estará apto para uso em https://accounts.zoho.com/');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Email | Arcade Lunar</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required placeholder='Seu nome'
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required placeholder='Email Desejado'
          />
        </div>

        <div className="form-group">
          <label>Position</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="Developer">Developer</option>
            <option value="Ceo">Ceo</option>
            <option value="Co-Ceo">Co-Ceo</option>
            <option value="Design">Design</option>
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
          </select>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default App;
