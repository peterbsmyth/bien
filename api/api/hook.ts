import { NowRequest, NowResponse } from '@now/node'
import {
  getSenderNextPoem,
  sendPoem,
  parseText
} from '../functions'

export default async (req: NowRequest, res: NowResponse) => {
  const text = req.body.message.content.text
  const fbRecipientId = +req.body.from.id

  parseText(text)
  const poem = await getSenderNextPoem(fbRecipientId)
  await sendPoem(poem, fbRecipientId)
  res.status(200).send(null)
}