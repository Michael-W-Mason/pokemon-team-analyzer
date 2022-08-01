import React, { SyntheticEvent, useState } from 'react';
import types from './data/pokemon';
import { defaultTeam } from './defaults/pokemon_default';
import Moves from './components/Moves';



function App() {
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
                          <Moves key={index} move={move} />
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
