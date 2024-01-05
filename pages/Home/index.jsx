import { FiPlus, FiStar } from 'react-icons/fi';
import { Container, Main, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
  return (
    <Container>
      <Header />

      <Main>

       <Section title="Meus filmes"></Section>       
       
       <NewNote to="/New">
        <FiPlus />
        Adicionar filme
       </NewNote>
      
      </Main>
     
      <Content>

          <Note data={{ 
            title: 'Interestellar',            
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              {id: '1', name: 'Ficção Cientifica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Familia'}
            ]
            }}
          />

          <Note data={{ 
            title: 'Interestellar',            
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              {id: '1', name: 'Ficção Cientifica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Familia'}
            ]
            }}
          />

          <Note data={{ 
            title: 'Interestellar',            
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              {id: '1', name: 'Ficção Cientifica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Familia'}
            ]
            }}
          />          

      </Content>    




    </Container>
  );
}