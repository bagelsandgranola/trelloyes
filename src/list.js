import React from 'react'
import './composition/list.css'
import Card from './card.js'

function List(props)
{
    return (
        <section className='List'>
        <header className='List-header'> 
        <h2> {props.header} </h2>
        </header>
        <div className='List-cards'>

        <div>
        {props.cards.map(card => (
    <Card
    key={card.id}
    id={card.id}
    title={card.title}
    content={card.content}
    onDeleteItem={props.onDeleteItem}
    onAddRandomItem={props.onAddRandomItem}

    />
    ))}

    <button type='button' onClick={ () => {props.onAddRandomItem(props.id)}}> + Add Random Card </button>


        </div>

        </div>
        
        </section>
    );
}



export default List;