import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Message />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
const tree = renderer
  .create(<messages name="messages" unread={4}/>)
  .toJSON();
expect(tree).toMatchSnapshot();  
});