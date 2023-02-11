import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Para from './Para';
// import List from './List';
// import Heading from './Heading';
import All from './All';
import youtuber, {favprog, myName} from './Other';


const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // [
  // <h1>Hello World!</h1> , 
  // <p>My name is Muskan Mittal</p>  // to render multiple JSX elements
  // ],
  // <div>
  // <h1>Hello World!</h1> , 
  // <p>My name is Muskan Mittal</p>  // to render multiple JSX elements  (to remove extra whole div use react.fragement)
  // <div>,
  // <React.Fragment>
  //   <h1>Hello World!</h1>
  //   <p>My name is Muskan Mittal.</p>
  // </React.Fragment>,
  // OR
  <>
    {/* <Heading></Heading> 
    <Para></Para>
    <List></List>
    <List /> */}

    <All />
    <li> { youtuber } </li>
    <li> { favprog } </li>
    <li> { myName() } </li>
    <h1 className='heading'>Hello World!</h1>
    <p>Hello, My name is Muskan Mittal.</p>
    

    {/* challenge 1 display current date and time*/}
    <p>Current Date is =  {currDate}</p>
    <p>Current Time is = {currTime}</p>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
