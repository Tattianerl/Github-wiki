import gitlogo from '../assets/gitlogo.png';
import { Container } from './styles';
import Input from '../components/Input/Input';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import Button from '../components/Button/Button';
import {api} from './services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');  
        } else {
          alert('Repositório já existe na lista!');
        }
      } else {
        alert('Repositório não encontrado!');
      }
    } catch (error) {
      alert('Erro ao buscar o repositório! Verifique o nome ou sua conexão.');
    }
  };

  const handleRemoveRepo = (id) => {
    const updateRepos = repos.filter(repo => repo.id !== id);
    setRepos(updateRepos);
  };


  return (
    <Container>
         <img src={gitlogo} width={72} height={72} alt="logo-github" />
         <Input value={currentRepo} onChange={(e => setCurrentRepo(e.target.value))} />
         <Button onClick={handleSearchRepo}/>
         {repos.map(repo => (
          <ItemRepo key={repo.id} repo={repo} onRemove={handleRemoveRepo} />
          
          ))}
    </Container>
     
  );
}

export default App;
