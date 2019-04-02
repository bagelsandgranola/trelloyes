import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';
import STORE from './store.js';

const lists = STORE.lists;
console.log(lists);

const allCards = STORE.allCards;
console.log(allCards);

const cardIDs = lists[0].cardIds;
console.log(cardIDs);

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

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List/>, div);
    ReactDOM.unmountComponentAtNode(div);

})

it ('renders the UI as expected', () => {

    const tree = renderer
    .create(
        <List
        key="1"
        header="header"
        cards={lists}
       
        >
        </List>
        )
    .toJSON();
    expect(tree).toMatchSnapshot();

})