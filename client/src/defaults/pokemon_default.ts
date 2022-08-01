import {Move} from "../interfaces/pokemon_interface";
import {Pokemon} from '../interfaces/pokemon_interface';

const defaultMove: Move = {
    type: '',
    power: 0,
    stat: '',
};

const defaultPokemon: Pokemon = {
    name: '',
    type1: '',
    type2: '',
    moves: [defaultMove, defaultMove, defaultMove, defaultMove],
};

export const defaultTeam: Pokemon[] = Array(6).fill(defaultPokemon);