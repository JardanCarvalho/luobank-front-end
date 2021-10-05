import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Hello = () =>{
  return(
    <div>
      <h1>Hello World</h1>
    </div>
  )
}


ReactDOM.render(<Hello />,
  document.getElementById('root')
);
