import React from 'react'
import { ItemRepoContainer } from './styles';

function ItemRepo({repo,  onRemove}) {
  return (
    <ItemRepoContainer>
        <h3>{repo.login}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='blank'  rel='noopener noreferrer'  className='link' >Ver repositório</a><br />
        <button className='remover' onClick={() => onRemove(repo.id)}>Remover</button>
        <hr />
    </ItemRepoContainer>
  )
}

export default ItemRepo;