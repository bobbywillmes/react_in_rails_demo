import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
const Demo = () => (
  <Layout>
    <h1>Demo page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde modi accusantium aut iure nesciunt consectetur sit ex iste perspiciatis animi esse ipsum dolorum, iusto, quibusdam molestiae, suscipit laborum odio!</p>
  </Layout>
)
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Demo />,
    document.body.appendChild(document.createElement('div')),
  )
})