import { NowRequest, NowResponse } from '@now/node'
import {
  getSenderNextPoem,
  sendPoem
} from '../functions'

export default async (req: NowRequest, res: NowResponse) => {
  const text = req.body.message.content.text
  const fbRecipientId = +req.body.from.id
  const poem = await getSenderNextPoem(fbRecipientId)
  await sendPoem(poem, fbRecipientId)
  res.status(200).send(null)
}