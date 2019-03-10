import React from 'react';
import Card from './card.js'
import List from './list.js'
import STORE from './store.js'
import './composition/app.css'


const testCard =
(
  <Card title='card title' content='here is the content'></Card>
)

const testList = 
(
  <List header="list header"></List>
)

const testApp =
(
  <App></App>
)

const lists = STORE.lists;
console.log(lists);

const allCards = STORE.allCards;
console.log(allCards);

const cardIDs = lists[0].cardIds;
console.log(cardIDs);


function App(props) {

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
    <div className="App-list">
   
    {STORE.lists.map(list => (
    <List 
    key={list.id} 
    header={list.header} 
    cards={list.cardIds.map(id => (

        allCards[id]
    )

    )}>

    </List>
    ))}
    </div>

   
    </main>
  );
}

export default App;
