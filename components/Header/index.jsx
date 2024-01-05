import { Container, Profile, Brand, Search  } from "./styles";
import { Input } from '../../components/Input';
import { FiSearch } from 'react-icons/fi';
import { Link } from "react-router-dom";


export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>
      
      <Profile to="/profile" >

        <div>
          <strong>Gabriel Beli</strong>
          <Link id="exit" to="../../pages/SignIn">Sair</Link>
        </div>
        
        <img 
        src="https://github.com/gabrielbeli.png" 
        alt="foto do usuário"
        />
      </Profile>
      
    </Container>
  );
}