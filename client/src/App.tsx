import React, { SyntheticEvent, useState } from 'react';

interface Move {
  type: string;
  power: number;
  stat: string;
}

interface Pokemon {
  name: string;
  type1: string;
  type2: string;
  moves: Move[];
}

function App() {
  const defaultMove: Move = {
    type: '',
    power: 0,
    stat: '',
  }
  const defaultPokemon: Pokemon = {
    name: '',
    type1: '',
    type2: '',
    moves: [defaultMove, defaultMove, defaultMove, defaultMove],
  }
  const defaultTeam: Pokemon[] = Array(6).fill(defaultPokemon);
  const types: string[] = [
    'Normal',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Ice',
    'Fighting',
    'Poison',
    'Ground',
    'Flying',
    'Psychic',
    'Bug',
    'Rock',
    'Ghost',
    'Dark',
    'Dragon',
    'Steel',
    'Fairy',
  ];

  function changeHandler() {

  }

  function submitHandler(e: SyntheticEvent) {
    e.preventDefault();
  }

  const [userTeam, setUserTeam] = useState(defaultTeam);
  return (
    <div className='App'>
      <form className='container mx-auto grid grid-cols-2 grid-rows-3 justify-center items-center'>
        {
          userTeam.map((pokemon, index) => {
            return (
              <div key={index} className='border-2 flex flex-col'>
                <div>
                  <label htmlFor="pokemon_name">Name:</label>
                  <input type="text" className='border-2' name='pokemon_name' />
                </div>
                <div>
                  <div>
                    <label htmlFor="pokemon_type_1">Type 1:</label>
                    <select className='border-2' name='pokemon_type_1'>
                      <option value='' defaultValue='' hidden></option>
                      {
                        types.map((type, index) => {
                          return (
                            <option key={index} value={type}>{type}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="pokemon_type_2">Type 2:</label>
                      <select className='border-2' name='pokemon_type_2'>
                        <option value='' defaultValue='' hidden></option>
                        {
                          types.map((type, index) => {
                            return (
                              <option key={index} value={type}>{type}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="pokemon_moves">Moves:</label>
                  <div>
                    {
                      pokemon.moves.map((move, index) => {
                        return (
                          <div key={index} className='grid grid-cols-2'>
                            <div className='flex flex-row'>
                              <div>
                                <label htmlFor="move_power">Power:</label>
                                <input type="number" value={move.power} name='move_power' />
                              </div>
                              <div>
                                <label htmlFor="move_type">Type:</label>
                                <select className='border-2' name='move_type'>
                                  <option defaultValue='' hidden></option>
                                  {
                                    types.map((type, index) => {
                                      return (
                                        <option key={index} value={type}>{type}</option>
                                      )
                                    })
                                  }
                                </select>
                              </div>
                              <div>
                                <label htmlFor="move_stat">Attack / Sp. Attack</label>
                                <select name="move_stat">
                                  <option value="Atk">Attack</option>
                                  <option value="spAtk">Special Attack</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
        <input type='submit' className='w-1/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' />
      </form>
    </div>
  );
}

export default App;
