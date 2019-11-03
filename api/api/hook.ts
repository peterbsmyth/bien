import { NowRequest, NowResponse } from '@now/node'
import {
  getSenderNextPoem,
  sendPoem,
  parseText
} from '../functions'

export default async (req: NowRequest, res: NowResponse) => {
  const {
    text,
    msisdn: sender
  } = req.body
  parseText(text)
  const poem = await getSenderNextPoem(sender)
  await sendPoem(poem, sender)
  res.status(200).send(null)
}