import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';
import STORE from './store.js';

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
            cards="{ title: 'hey', content: 'hey' }"
        
            >
        
            </List>
            )
    .toJSON();
    expect(tree).toMatchSnapshot();

})