import { FiMail, FiLock, FiLogIn, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignUp() {
  return (
    <Container>
     
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompnhar tudo que assitir.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar" />

        <Link to="/">
          Voltar para login
        </Link>
      </Form>
      <Background/>
    </Container>
  );
}