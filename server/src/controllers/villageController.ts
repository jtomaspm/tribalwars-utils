import * as service from '../services/villageServive.js'

export const getVillageByCoord = async (req: any, res: any, next: any) => {
    try {
        const test_res = await service.getVillageByCoord(req.params.coord, { world: '85', server: 'pt' })
        res.send(test_res)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
