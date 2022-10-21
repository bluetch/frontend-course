import { useEffect, useState } from "react";
import './App.css';

// https://pokeapi.co/
// https://github.com/jahidulbinrafiq/HTTP_REQUEST_Methods
const APIURL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [data, setData] = useState([]);

  const loadXMLDoc = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setData(this.responseText);
        console.log(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/", true);
    xhttp.send();
  }

  const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 20; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites['front_default'],
        type: result.types.map((type) => type.type.name).join(', '),
        id: result.id
      }));
      setData(pokemon);
    });
  };

  const fetchGet = () => {
    // GET
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  const fetchPost = () => {
    // POST
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        userId: 6,
        id: 300,
        title: "Learn fetch api",
        completed: false
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  const fetchPut = () => {
    // PUT
    fetch('https://jsonplaceholder.typicode.com/todos/5', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        userId: 1,
        id: 5,
        title: 'hello fetch api',
        completed: false
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  const fetchPatch = () => {
    //PATCH
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        completed: true,
        title: 'we are going to learn PATCH method'
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  const fetchDelete = () => {
    // DELETE
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1>Pokemon API</h1>
        <div className="actions">
          <button onClick={fetchPokemon}>fetchPokemon</button>
          {/* <button onClick={loadXMLDoc}>XMLHttpRequest</button>
          <button onClick={fetchGet}>Fetch Get</button>
          <button onClick={fetchPost}>Fetch Post</button>
          <button onClick={fetchPut}>Fetch Put</button>
          <button onClick={fetchPatch}>Fetch Patch</button>
          <button onClick={fetchDelete}>Fetch Delete</button> */}
        </div>
        <div className="grid">
          {data.map((item) => {
            return (
              <div key={item.id} className="item">
                <img src={item.image} alt="" />
                <p className="name">{item.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
