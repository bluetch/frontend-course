import { useEffect, useState } from "react";
import './App.css';

// https://pokeapi.co/
// https://github.com/jahidulbinrafiq/HTTP_REQUEST_Methods
// https://mockapi.io/
const APIURL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [data, setData] = useState([]);

  const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 20; i++) {
      const url = `${APIURL}${i}`;
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

  useEffect(() => {
    fetchPokemon();
  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1>Pokemon API</h1>
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
