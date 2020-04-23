import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { Title, Form, Repositories, Error } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }

}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setinputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if(storageRepositories){
            return JSON.parse(storageRepositories);
        }else{
            return [];
        }
    });

    /*SALVAR NO STORAGE*/
    useEffect(()=> {
        localStorage.setItem(
            '@GithubExplorer:repositories',
            JSON.stringify(repositories),
        );
    },[repositories]);

async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(!newRepo){
        setinputError('Digite o autor/nome do respositório');
        return;
    }


   try {

       const response = await api.get(`repos/${newRepo}`);
       console.log(response.data);
       const repository = response.data;

       setRepositories([...repositories, repository]);
       setNewRepo('');
       setinputError('');

   } catch (err) {
       setinputError('Erro na busca desse respositório');
   }

}

    return (
        <>
        <img src={logoImg} alt="GitHub Logo" />
        <Title>Explore repositórios no GitHub</Title>
        <Form hasError={!!inputError} onSubmit={handleAddRepository}>
            <input
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
            placeholder="Digite o nome do repositório"
            />
            <button type="submit">Pesquisar</button>
        </Form>

            {inputError && <Error>{inputError}</Error>}

        <Repositories>
               {repositories.map(repository => (
                   <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                       <img src={repository.owner.avatar_url}
                       alt={repository.owner.login} />
                       <div>
                           <strong>{repository.full_name}</strong>
                           <p>{repository.description}</p>
                       </div>
                       <FiChevronRight size={20} />
                   </Link>
               ))}


            </Repositories>
    </>
    )
}

export default Dashboard;
