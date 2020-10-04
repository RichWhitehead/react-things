import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import ThingsList from './ThingsList.js'
import Footer from './Footer.js'
import things from './things.js'

function App() {
  const [thingsState,setThingsState]=useState(things)
  function addItem(newItem){
    setThingsState([...thingsState,{name:newItem,id:thingsState.length+1}])}
  return (
    <div className="App">
      <header className="App-header">
        
        <Header title={'Awesome Tools'} count={thingsState.length} />
        <ThingsList things={thingsState} addItem= {addItem}/>
        
        <Footer />
      </header>
    </div>
  );
}

export default App;
