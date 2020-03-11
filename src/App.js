import React, { useState, useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

 function App() {


//   var name  = "Mahfuz";

//   var person = {
//     name: "Doktor Mahfuz",
//     job: "Singer"
//   }

//   var person2 = {
//     name: "Eva Rahman",
//     job: "Kokil konthi"
//   }

//   var result = [];
//    for(let i=0; i<10; i++){
//      var result2 = result.push(i);
//   }

//   var mystyle = {
//     color: 'orange',
//     backgroundColor: 'cyan'
//   }

   const nayoks = ['anowar', 'Golam Mostufa', 'jafor ikbal', 'Bappi', 'Shuvo', 'shakib'];

   const products = [
    {name: 'Photoshop', price: '$100'},
    {name:'Windows', price:'$80'},
    {name:'VPN', price:'$50'},
    {name:'AVIRA', price:'$60'},
    {name:'Adobe', price:'$249'},
   ]

   const nayokNames = nayoks.map(nayok => nayok);
   console.log(nayokNames);

   const productNames = products.map(product => product.price);
   console.log(productNames);
   
   var moreUser = [];

  return (
     <div className="App">
      <header className="App-header">
         {/* {<img src={logo} className="App-logo" alt="logo" /> */}
{/* //         <p>
//           Edit Done <code>src/App.js</code> and save to reload.
//         </p> }
//         { <a>
//           Learn React
//         </a> */}
{/* //         <h1>My heading {2+5*25+65}</h1>
//         <h2 style={{backgroundColor:'green', color: 'blue'}}>This is Doctor {name}</h2>
//         <h3>{result}</h3>
//         <p>My first react paragraph</p>
//         <p>oh my my {person.job + " " + person.name} </p>

//         <h3>She is {person2.name} and her job is {person2.job} </h3>

//         <h4 style={mystyle} >Singer: {person2.name + " Job: " + person2.job} </h4> } */}
        

        
          {/* <Person name= {nayoks[2]} nayika="Moyuiri"></Person>
         <Person name="Omar sani" nayika="Mousumi"></Person>
        <Person name="Ilias Kanchon" nayika="Chompa"></Person>
        <Person name="Xosim" nayika="Shabana"></Person>
        <Person name="Bapparaz" nayika="cheka"></Person> */}

        <Counter></Counter>

        <Users></Users>

          

        <ul style={{textAlign:'left'}}>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          <br/>
          {
            products.map(product => <li>{product.name + " " + product.price}</li>)
          }
          {/* <li> {nayokNames[0]} </li>
          <li> {nayokNames[1]} </li>
          <li> {nayokNames[2]} </li>
          <li> {nayokNames[3]} </li> */}
        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }

        {/* <Product name={products[0]} ></Product>
        <Product name={products[1]}></Product>
        <Product name={products[2]}></Product>
        <Product name={products[3]}></Product> */}
      
      </header>
     
    </div>

   );
 }
 

// function Person (props){
//   const personStyle = {
//     backgroundColor: 'white',
//     color: 'green',
//     border: '2px solid yellow',
//     marginTop: '10px',
//     width: '400px',

//   }

//   // return (
//   //   // <div style={{border: '2px solid yellow', marginTop:'10px'}}>
//   //   <div style={personStyle}>
//   //       <h1>My name is Hasan</h1>
//   //       <h3>Im not a designer</h3>
//   //   </div>
//   // )
//   console.log(props);
  
//   return (
   
//     <div style={personStyle}>
//         <h1>My name is {props.name} </h1>
//         <h3>My heroine is: {props.nayika} </h3>
//     </div>
//   )

  function Counter(){

    const [count, setCount] = useState(10);

    // const handleIncrese = () => console.log('clicked');
    const handleIncrese = () =>  setCount (count+1);
      // const newCount = count + 1;
      // setCount (newCount)


    const handleDecrese = () => setCount(count-1);
    // const newCount2 = count -1;
      // setCount(newCount2);

    return(
      <div>
        <h1>Count: {count} </h1>
        <button onClick={handleIncrese} >Increse</button> <br/>
        <button onClick={handleDecrese} >Decrease</button> <br/>

        <button onClick={() => setCount(count+1)} >Baraw</button>
        <button onClick={ () => setCount(count-1)} >Komaw</button>

      </div>
    )
}

function Users (){

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log('Calling  Efffects');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
     
  }, [])

  return (
    <div style= {{textAlign:'left'}}>
      <h3>Dynamic Users: {users.length} </h3>
      {
        console.log(users)
      }

      { 
      <ol>
          {
            users.map(user => <li>{user.name}</li> )
          }
        </ol>
      } 

      { 
      <ol>
          {
            users.map(user => <li>{user.email}</li> )
          }
        </ol>
      }   

    </div>
  )
}

    

    function Product(props){

      const productStyle = {
        backgroundColor:'gray',
        color: 'gold',
        border: '2px solid red',
        borderRadius: '5px',
        margin:'10px',
        heigt: '200px',
        width: '200px',
        float:'left',
      }
       const {name, price} = props.product;
      return (
        <div style={productStyle}>
          <h1> {name} </h1>
          <h2> {price} </h2>
          <button>Buy Now</button>
        </div>
    );
  }




export default App;
