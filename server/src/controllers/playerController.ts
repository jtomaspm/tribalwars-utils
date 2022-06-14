import * as service from '../services/playerService.js'

export const getPlayerByName = async (req: any, res: any, next: any) => {
    try {
        const test_res = await service.getPlayerByName(req.params.name, { world: req.params.world, server: req.params.server })
        res.send(test_res)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
