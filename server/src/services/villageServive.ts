import { world_name } from '../utils/TWdataFactory.js';
import { getTwData } from '../utils/TWdataCache.js'

export const getVillageById = async (id: any, world: world_name) => {
    let twdata = await getTwData(world);
    return twdata.components.villages.filter((village) => village.id == id)
  }