export type village_details = {
    x: number;
    y: number;
    coords: string;
    player: string;
    name: string;
    points: number;
}

export type player_details = {
    name: string;
    ally_tag: string;
    villages: village_details[];
    points: number;
}

export type ally_details = {
    name: string;
    tage: string;
    players: player_details[];
    points: number;
    villages: village_details[];
}

