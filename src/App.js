import React from 'react';
import Card from './card.js'
import List from './list.js'
import STORE from './store.js'
import './composition/app.css'


const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
  + Math.random().toString(36).substring(2, 4);

  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',

  }
}

class App extends React.Component{

  state = { 
    storeState: STORE,
  }


  handleDeleteClick = (item) => {
    console.log("Delete clicked", item)
    console.log(this.state.storeState.lists)

    const newLists = this.state.storeState.lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== item);
      return list;
    });

    delete this.state.storeState.allCards[item];

    const allCards = this.state.storeState.allCards;

    this.setState({
      storeState: {
        lists: newLists,
        allCards

    }
    })


  
  }

  handleAddRandomCard = (listIndex) => {
    console.log("Add random clicked", listIndex)

      const newCard = newRandomCard();
      console.log({newCard});

      const newLists = this.state.storeState.lists.map(list => {
        if (list.id === listIndex)
        {
          list.cardIds.push(newCard.id)
        }
        return list
      })

      this.setState ({
        storeState: {
          lists: newLists,
          allCards: {
            ...this.state.storeState.allCards,
            [newCard.id]: newCard
          }
        }
      })

    }

  

  render () {
  return (
    <>
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
    <div className="App-list">
   
    {this.state.storeState.lists.map(list => (
    <List 
    key={list.id} 
    id={list.id}
    header={list.header} 
    cards={list.cardIds.map(id => (

        this.state.storeState.allCards[id]
    )

    )}
    onDeleteItem={this.handleDeleteClick}
    onAddRandomItem={this.handleAddRandomCard}>

    </List>
    ))}
    </div>

   
    </main>
    </>
  )
}
}


export default App;
