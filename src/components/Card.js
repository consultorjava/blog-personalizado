import React, { useEffect, useState } from 'react';
import { fetchAuthor } from '../services';
import './Card.css';

function Card({ id, userId, titulo, descricao }){
    const [cardAuthor, setCardAuthor] = useState('');
    useEffect(() => {
      async function getAuthor() {
        const author = await fetchAuthor(userId);
        setCardAuthor(author.name);
      }
      getAuthor();
    }, [userId]);

    return(
      <div className="card col-3 mb-1 ms-1">
        <div className="card-body">
        <a href={ '/post/' + id }>
          <h5 className="card-title">{titulo}</h5></a>
          <h6 className="card-subtitle mb-2 text-muted">{cardAuthor}</h6>
          <p className="card-text">{descricao}</p>
        </div>
      </div>
  )
}

export default Card;