import { fetch_result, fetch_basic_components } from "./fecth_api.js"


export type world_name = {
    server: string;
    world: string;
}

export type twdata = {
    world: world_name;
    api_link: string;
    components: fetch_result;
    update_components: () => void;
}


export async function TWdataFactory(world: world_name): Promise<twdata> {
    let twdata: twdata = {
        world: world,
        api_link: 'https://' + world.server + world.world + '.tribalwars.com.pt/map/',
        components: await fetch_basic_components('https://' + world.server + world.world + '.tribalwars.com.pt/map/'),
        update_components: () => { }
    }
    twdata.update_components = async () => {
        twdata.components = await fetch_basic_components(twdata.api_link)
    }
    return twdata
}

export const compareWorlds = (world1: world_name, world2: world_name): Boolean => {
    return world1.server == world2.server && world1.world == world2.world;
}


