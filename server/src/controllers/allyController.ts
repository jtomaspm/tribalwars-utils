import * as service from '../services/allyService.js'

export const getAllyByTag = async (req: any, res: any, next: any) => {
    try {
        const test_res = await service.getAllyByTag(req.params.tag, { world: req.params.world, server: req.params.server })
        res.send(test_res)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
