export interface Move {
    type: string;
    power: number;
    stat: string;
}

export interface Pokemon {
    name: string;
    type1: string;
    type2: string;
    moves: Move[];
}