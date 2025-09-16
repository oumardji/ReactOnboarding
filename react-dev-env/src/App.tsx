import './App.css'
import type { CSSProperties } from 'react';
import { useState } from 'react';




const divStyle: CSSProperties = {
    backgroundColor: 'lightgrey',
    margin: '0px',
    padding: '5px',
    textAlign: 'center',
};


function App() {
  const [color, setColor] = useState("blue");

  let data = {
    title: "My React App",
    footerText: "footer text",
    author: {
        name:"John Doe",
        phone: "800-555-1212",
        email: "jdoe@gmail.com"
    }, 
    books: [
    {isbn:'123', title:'The Time Machine', price:5.95 },
    {isbn:'456', title:'War of the Worlds', price:6.95 },
    {isbn:'789', title:'The Invisible Man', price:4.95 }
  ]
 }
    return (
        <div className={'boxed'} >
          <Header {...data}/>
          <Body setColor={setColor} color={color} {...data}/>
          {/* <FragTest/>*/} 
          <Footer {...data}/>
        </div>
    );
}

function Header(props:any){
  return ( <h3 style={divStyle}>{props.title}</h3>);
}

const Body =(props:any)=>{
  let handleChange = function(event:any){
    props.setColor(event.currentTarget.value);
} 
  let onResetClick = function(){
    props.setColor("green");
}



  return(
    <div> 
      <p>Author:{props.author.name}</p>
      <BookList books={props.books}/>
      <p>Enter your favorite color:</p>
      <input onChange={handleChange} type='text' name='color' value={props.color} />
      <button onClick={onResetClick}>Reset</button>
      </div>
  );
}

const Footer= (props:any ) => {
  return(
    <>
      <h4 style={divStyle}>{props.footerText}</h4>

    </>
    

  );
}

function FragTest(){
  return (<ul><ColorList/></ul>);
}

function ColorList(){
  return (
    <>
    <li>Red</li>
    <li>Yellow</li>
    <li>Blue</li>
    </>
  );
}

function BookList(props:any){
  const[selectedIndex, setSelectedIndex] = useState(0);

  let onClick = function(index:number){
    setSelectedIndex(index);
}

  return(
      <ul>
        {props.books.map((book:any, index:number)=>{
          return (<li key={index} className={index===selectedIndex?"selected":""} onClick = { (_) =>onClick(index)}>
             {book.title}
          </li>)
        })}
      </ul>
  );
}

export default App;


