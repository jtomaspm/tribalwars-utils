import { TWdataFactory } from '../utils/TWdataFactory.js';

export async function run_test () {
    const twdata = await TWdataFactory({
        server : 'pt',
        world : '85'
    })

    console.log(
        // twdata.components.villages.filter((ally) => ally.player == "2673749"),
        twdata.components.players.filter((player) => player.name == "PopAndBoom"),
    )
    await twdata.update_components()

    console.log(
        twdata.components.players.filter((player) => player.name == "damapatuxa"),
    )

}