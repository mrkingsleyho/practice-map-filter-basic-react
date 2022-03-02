import './App.css';
import data from './data';
import {useState} from 'react';

function App() {
  const [people, setPeople] = useState(data);
  const deleteItem = (id) => {
    let newItem = people.filter((person) => person.id !== id);
    setPeople(newItem);
  };
  return (
    <>
      {people.map((person => {
        const {id, name, age, hobby} = person;
        return (
          <main>
            <div key={id}>
              <h1>{name}</h1>
              <h2>{age}</h2>
              <p>{hobby}</p>
              <button onClick={() => deleteItem(id)}>
                delete
              </button>
            </div>
          </main>
        )
      }))}
      <button onClick={() => setPeople([])}>delete all</button>
    </>
  );
}

export default App;
