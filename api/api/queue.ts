import { NowRequest, NowResponse } from '@now/node'

export default (req: NowRequest, res: NowResponse) => {
  console.dir('queue')
  console.dir(req.body)
  res.status(200).send(null)
}