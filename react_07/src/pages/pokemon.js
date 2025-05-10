import { useEffect, useState } from "react";
import './../App.css';

const APIURL = "https://pokeapi.co/api/v2/pokemon/";

export const Pokemon = () => {
  const [data, setData] = useState([]);

  // const fetchPokemon = () => {
  //   const promises = [];
  //   for (let i = 1; i <= 21; i++) {
  //     const url = `${APIURL}${i}`;
  //     promises.push(fetch(url).then((res) => res.json()));
  //   }
  //   Promise.all(promises).then(results => {
  //     const pokemons = results.map((result) => ({
  //       name: result.name,
  //       image: result.sprites['front_default'],
  //       type: result.types.map((type) => type.type.name).join(', '),
  //       id: result.id
  //     }));
  //     setData(pokemons);
  //   });
  // };

  const fetchPokemon = async() => {
    const data = [];
    for (let i = 1; i <= 21; i++) {
      const url = `${APIURL}${i}`;
      data.push(await fetch(url).then((res) => res.json()));
    }
    const pokemons = data.map((item)=>{
      return {
        name: item.name,
        image: item.sprites['front_default'],
        id: item.id
      }
    })
    setData(pokemons);
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