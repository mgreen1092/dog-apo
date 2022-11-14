import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import BreedList from './Components/BreedList';
import RandomDogs from './Components/RandomDogs';
import Header from './Components/Header';

//axios get request gets data back from an API, don't
// need to set headers like you do in fetch, 
//don't need to convert it to JSON, 
//has the .get() method
//does more with less code -> only need to use one.then() callback to access the requested JSON data
//better error handling 
//can be used on both the server and the client 
//need to install axios
//Source: https://www.freecodecamp.org/news/axios-react-how-to-make-get-post-and-delete-api-requests/
//let dogBreedArray=[]


function App() {
 //let dogBreedArray =[]
  const [dogBreedArray, setDogBreedArray] = useState([])
  const [dogImage, setDogImage] =useState()
  const [input, setInput] = useState('')
  const [currentView, setCurrentView] = useState('Dog Breeds')
  function handleClick () {
    axios.get('https://dog.ceo/api/breeds/list').then((response) => {
    console.log(response.data.message)
    setDogBreedArray(response.data.message)
  }) }
  function handleChange (e) {
    setInput(e.target.value)
  }
  console.log(input)

function handleSubmit () {
  let fetchInput = input.toLowerCase()
  axios.get(`https://dog.ceo/api/breed/${fetchInput}/images/random`).then((response) => {
  // let response = response
  console.log(response)
  //setDogImage(response)
  setDogImage(response.data.message)
})}
console.log(dogImage)
console.log(dogBreedArray)
function pageView () {
  switch (currentView) {
  case 'Random Dogs':
    return  <RandomDogs handleSubmit={handleSubmit} handleChange={handleChange} dogImage={dogImage}/>
  default: 
    return <BreedList handleClick={handleClick} dogBreedArray={dogBreedArray}/>
  }
}

  return (
    <div className="App">
      <Header setCurrentView={setCurrentView} dogBreedArray={dogBreedArray}/>
      {pageView()}
    </div>
  );
}

export default App;

