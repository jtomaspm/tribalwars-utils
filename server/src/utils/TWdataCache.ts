import * as TWdataFactory from "./TWdataFactory.js"
import * as details from "../types.js";


let CACHE: TWdataFactory.twdata[] = [];

export const getTwData = async (world: TWdataFactory.world_name): Promise<TWdataFactory.twdata> => {
    const queryResults: TWdataFactory.twdata[] = CACHE.filter((data: TWdataFactory.twdata) => TWdataFactory.compareWorlds(world, data.world))
    if (queryResults.length != 0) {
        console.log("found in cache")
        return queryResults[0]
    }
    const newTwData: TWdataFactory.twdata = await TWdataFactory.TWdataFactory(world)
    CACHE.push(newTwData)
    return newTwData
}

export const getVillagesByPlayer = async (world: TWdataFactory.world_name, name: string): Promise<details.village_details[]> => {
    const twdata = await getTwData(world);
    const playerId = twdata.components.players.filter(player => player.name == name)[0].id
    return twdata.components.villages
        .filter(
            village => village.player == playerId
        )
        .map(
            vil => {
                const details: details.village_details = {
                    x: parseInt(vil.x),
                    y: parseInt(vil.y),
                    coords: vil.x + "|" + vil.y,
                    player: name,
                    name: vil.name,
                    points: parseInt(vil.points)
                }
                return details
            })
}


export const getPlayersByAlly = async (world: TWdataFactory.world_name, tag: string): Promise<Promise<details.player_details>[]> => {
    const twdata = await getTwData(world);
    const allyId = twdata.components.allys.filter(ally => ally.tag == tag)[0].id
    return twdata.components.players
        .filter(
            player => player.tribe == allyId
        )
        .map(
            async (player) => {
                const details: details.player_details = {
                    name: player.name,
                    ally_tag: tag,
                    villages: await getVillagesByPlayer(world, player.name),
                    points: parseInt(player.points)
                };
                return details;
            })
}