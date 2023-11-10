import './App.css'
import Greet from './Greet';

function App() {
  const animals = [ "frog", "Lion", "Cow", "Snake", "Liazrd"];
    const animalsList = animals.map((animal) =>  <li key={animal}> 
    {animal}  </li> );

  return (
    <>
    <Greet   />
      <div>
          <h1>Animals: </h1>
        <ul >
          {animalsList}
        </ul>
      </div>
    </>
  )
}

export default App
