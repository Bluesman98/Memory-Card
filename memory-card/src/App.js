import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(-1);
  const [highScore, setHighScore] = useState(0);
  const [list, setList] = useState([
    { name: "Gandalf", id: 0, clicked: false },
    { name: "Aragorn", id: 1, clicked: false },
    { name: "Legolas", id: 2, clicked: false },
    { name: "Gimli", id: 3, clicked: false },
    { name: "Boromir", id: 4, clicked: false },
    { name: "Frodo", id: 5, clicked: false },
    { name: "Sam", id: 6, clicked: false },
    { name: "Merry", id: 7, clicked: false },
    { name: "Pippin", id: 8, clicked: false },
    { name: "Galadriel", id: 9, clicked: false },
    { name: "Faramir", id: 10, clicked: false },
    { name: "Elrond", id: 11, clicked: false },
  ]);

  function shuffle(array) {
    let array_copy = array;
    for (var i = array_copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array_copy[i];
      array_copy[i] = array_copy[j];
      array_copy[j] = temp;
    }
    return array_copy;
  }

  function reset() {
    let temp = [...list];
    const nextList = temp.map((item) => {
      item.clicked = false
    });
    setList(list, shuffle(list));
    setList(list, nextList);
  }

  function handleClick(id) {
    let temp = [...list];
    const nextList = temp.map((item) => {
      if (id === item.id) {
        if (item.clicked === false) {
          item.clicked = true;
          setScore(score + 1);
        } else {
          if (highScore < score) setHighScore(score);
          setScore(0);
          reset()
        }
      }
    });
    setList(list, shuffle(list));
    setList(list, nextList);
    console.log(list);
  }

  useEffect(() => {
    setList(list, shuffle(list));
    setScore(score + 1);
  }, []);
  return (
    <div className="App">
      <div className="header">
      <div className="logo"><img src={require('./logo.png')}/></div>
        <div className="score">
          <div>Score: {score}</div>
          <div>High Score: {highScore}</div>
        </div>
      </div>
      <CardList list={list} handler={handleClick} />
    </div>
  );
}

export default App;
