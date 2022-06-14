import fetch from "node-fetch";

type ally = {
  id : string;
  name : string;
  tag : string;
  members : string;
  villages : string;
  points : string;
  all_points : string;
}

type player = {
  id : string;
  name : string;
  tribe : string;
  villages : string;
  points : string;
  rank : string;
}

type village = {
  id : string;
  name : string;
  x : string;
  y : string;
  player : string;
  points : string;
  rank : string;
}

export type fetch_result = {
  allys: ally [];
  players: player [];
  villages: village [];
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

export async function fetch_basic_components(base_url : string): Promise<fetch_result> {
  let result : fetch_result = {
    allys : [],
    players : [],
    villages : []
  }

  // allys
  let url = base_url+"ally.txt";
  let txt = await (await fetch_api(url)).split('\n');
    txt.forEach( line => {
    let params = line.split(',');
    let ally : ally = {
      id : params[0],
      name : decodeURIComponent(params[1]).replaceAll("+", " "),
      tag : decodeURIComponent(params[2]).replaceAll("+", " "),
      members : params[3],
      villages : params[4],
      points : params[5],
      all_points : params[6] 
    }
    result.allys.push(ally) 
  })

    // players
    url = base_url+"player.txt";
    txt = await (await fetch_api(url)).split('\n');
    txt.forEach( line => {
      let params = line.split(',');
      let player : player = {
        id : params[0],
        name : decodeURIComponent(params[1]).replaceAll("+", " "),
        tribe : params[2],
        villages : params[3],
        points : params[4],
        rank : params[5]
      }
      result.players.push(player) 
    })

      // villages
  url = base_url+"village.txt";
  txt = await (await fetch_api(url)).split('\n');
  txt.forEach( line => {
    let params = line.split(',');
    let village : village = {
      id : params[0],
      name : decodeURIComponent(params[1]).replaceAll("+", " "),
      x : params[2],
      y : params[3],
      player : params[4],
      points : params[5],
      rank : params[6] 
    }
    result.villages.push(village) 
  })

  return result
}
