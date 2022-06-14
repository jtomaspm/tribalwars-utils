import { world_name } from '../utils/TWdataFactory.js';
import { getTwData, getVillagesByPlayer } from '../utils/TWdataCache.js'
import { player_details } from '../types.js'

export const getPlayerByName = async (name: any, world: world_name): Promise<player_details> => {
    console.log(name)
    let twdata = await getTwData(world);
    const player = twdata.components.players.filter((player) => player.name == name)[0]
    const details: player_details = {
        name: player.name,
        ally_tag: twdata.components.allys.filter(ally => ally.id == player.tribe)[0].tag,
        villages: await getVillagesByPlayer(world, name),
        points: 0
    }
    console.log(details)
    return details
}