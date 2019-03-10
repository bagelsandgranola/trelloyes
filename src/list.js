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
    title={card.title}
    content={card.content}/>
    ))}


        </div>

        </div>
        
        </section>
    );
}



export default List;