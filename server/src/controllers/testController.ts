import { createTest } from '../services/testService.js'

export const getTest = async (req :any, res:any, next:any) => {
  try {
    const test_res = createTest()
    res.send(test_res)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500)
  }
}
