import { world_name } from '../utils/TWdataFactory.js';
import { getPlayersByAlly, getTwData } from '../utils/TWdataCache.js'
import { ally_details, village_details } from '../types.js'

export const getAllyByTag = async (tag: any, world: world_name): Promise<ally_details> => {
    let twdata = await getTwData(world);
    const ally = twdata.components.allys.filter((a) => a.tag == tag)[0]
    console.log(ally)
    const players = await getPlayersByAlly(world, tag);
    let villages: village_details[] = []
    players.forEach(
        async player => villages = [...villages, ... (await player).villages]
    )
    const details: ally_details = {
        name: ally.name,
        tag: ally.tag,
        players: players,
        points: parseInt(ally.points),
        villages: villages
    }
    console.log(details)
    return details
}