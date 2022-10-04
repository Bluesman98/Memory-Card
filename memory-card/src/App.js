import React, { useState } from "react";
import CardList from "./components/CardList";
import "./App.css";

function App() {
  const [counter,setcounter] = useState(0)
  const [list, setList] = useState([
    { name: "Gandalf", id: 0 },
    { name: "Aragorn", id: 1 },
    { name: "Legolas", id: 2 },
    { name: "Gimli", id: 3 },
    { name: "Boromir", id: 4 },
    { name: "Frodo", id: 5 },
    { name: "Sam", id: 6 },
    { name: "Merry", id: 7 },
    { name: "Pippin", id: 8 },
    { name: "Galadriel", id: 9 },
    { name: "Faramir", id: 10 },
    { name: "Elrond", id: 11 },
  ]);

  function shuffle(array) {
    let array_copy =array
    for (var i = array_copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array_copy[i];
        array_copy[i] = array_copy[j];
        array_copy[j] = temp;
    }
  return array_copy
}

function handle(){
  setList(list,shuffle(list))
  setcounter(counter+1)
}

  return (
    <div className="App">
      <CardList list={list}/>
      <button onClick={handle}></button>
    </div>
  );
}

export default App;
