import * as TWdataFactory from "./TWdataFactory.js"


let CACHE : TWdataFactory.twdata[] = [];

export const getTwData = async (world : TWdataFactory.world_name) : Promise<TWdataFactory.twdata> => {
    const queryResults : TWdataFactory.twdata [] = CACHE.filter((data: TWdataFactory.twdata) => TWdataFactory.compareWorlds(world, data.world))
    if (queryResults.length != 0) {
        console.log("found in cache")
        console.log(queryResults)
        return queryResults[0]
    } 
    const newTwData : TWdataFactory.twdata = await TWdataFactory.TWdataFactory(world)
    CACHE.push(newTwData)
    console.log(CACHE)
    return newTwData
}


