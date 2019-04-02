import React from 'react';
import './composition/card.css';

function Card(props) {
  return (
    <div className='Card'>
      <h3> {props.title}</h3>
      <p> {props.content}</p>

      <p> props.id = {props.id}</p>

      <button onClick={() => props.onDeleteItem(props.id)} type='button'>
      delete
      </button>
    </div>
  );
}

export default Card;