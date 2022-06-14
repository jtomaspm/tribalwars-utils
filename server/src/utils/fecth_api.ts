import fetch from "node-fetch";

type ally = {
  id: string;
  name: string;
  tag: string;
  members: string;
  villages: string;
  points: string;
  all_points: string;
}

type player = {
  id: string;
  name: string;
  tribe: string;
  villages: string;
  points: string;
  rank: string;
}

type village = {
  id: string;
  name: string;
  x: string;
  y: string;
  player: string;
  points: string;
  rank: string;
}

export type fetch_result = {
  allys: ally[];
  players: player[];
  villages: village[];
}

export async function fetch_api(url: string): Promise<string> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.text() as Promise<string>
    })
}

export async function fetch_basic_components(base_url: string): Promise<fetch_result> {
  let result: fetch_result = {
    allys: [],
    players: [],
    villages: []
  }

  // allys
  result.allys = await handle_ally(base_url);

  // players
  result.players = await handle_player(base_url);

  // villages
  result.villages = await handle_village(base_url);


  return result
}

const handle_ally = async (base_url: string): Promise<ally[]> => {
  let url = base_url + "ally.txt";
  let txt = (await fetch_api(url)).split('\n');
  let result: ally[] = [];
  txt.forEach(line => {
    let params = line.split(',');
    let ally: ally = {
      id: params[0],
      name: decodeURIComponent(params[1]).replaceAll("+", " "),
      tag: decodeURIComponent(params[2]).replaceAll("+", " "),
      members: params[3],
      villages: params[4],
      points: params[5],
      all_points: params[6]
    }
    result.push(ally)
  })
  return result
}


const handle_player = async (base_url: string): Promise<player[]> => {
  let url = base_url + "player.txt";
  let txt = (await fetch_api(url)).split('\n');
  let result: player[] = [];
  txt.forEach(line => {
    let params = line.split(',');
    let player: player = {
      id: params[0],
      name: decodeURIComponent(params[1]).replaceAll("+", " "),
      tribe: params[2],
      villages: params[3],
      points: params[4],
      rank: params[5]
    }
    result.push(player)
  })
  return result
}


const handle_village = async (base_url: string): Promise<village[]> => {
  let url = base_url + "village.txt";
  let txt = (await fetch_api(url)).split('\n');
  let result: village[] = [];
  txt.forEach(line => {
    let params = line.split(',');
    let village: village = {
      id: params[0],
      name: decodeURIComponent(params[1]).replaceAll("+", " "),
      x: params[2],
      y: params[3],
      player: params[4],
      points: params[5],
      rank: params[6]
    }
    result.push(village)
  })
  return result
}