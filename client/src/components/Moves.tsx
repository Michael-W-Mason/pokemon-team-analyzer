import types from "../data/pokemon";
import { Move } from "../interfaces/pokemon_interface";

const Moves = (props : {move : Move}) => {
    return (
        <>
            <div className='grid grid-cols-2'>
                <div className='flex flex-row'>
                    <div>
                        <label htmlFor="move_power">Power:</label>
                        <input type="number" value={props.move.power} name='move_power' />
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
        </>
    )
}

export default Moves;