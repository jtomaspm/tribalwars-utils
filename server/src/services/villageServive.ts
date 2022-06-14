import { world_name } from '../utils/TWdataFactory.js';
import { getTwData } from '../utils/TWdataCache.js'
import { village_details } from '../types.js'

export const getVillageByCoord = async (coords: any, world: world_name): Promise<village_details> => {
    console.log(coords)
    let twdata = await getTwData(world);
    const vil = twdata.components.villages.filter((village) => {
        const c = village.x + "|" + village.y
        return c == coords
    })[0]
    const details: village_details = {
        x: parseInt(vil.x),
        y: parseInt(vil.y),
        coords: vil.x + "|" + vil.y,
        player: twdata.components.players.filter((player) => player.id == vil.player)[0].name,
        name: vil.name,
        points: parseInt(vil.points)
    }
    console.log(details)
    return details
}