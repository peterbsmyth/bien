import { NowRequest, NowResponse } from '@now/node'
import Nexmo from 'nexmo'
const nexmo: any = new Nexmo({
  apiKey: process.env.KEY || '',
  apiSecret: process.env.SECRET || '',
  applicationId: process.env.ID || ''
})
const PHONE_NUMBER = process.env.PHONE_NUMBER

export default (req: NowRequest, res: NowResponse) => {
  const { text, msisdn } = req.body

  nexmo.message.sendSms(
    PHONE_NUMBER,
    msisdn,
    `${msisdn}:${text}`,
    (err: any) => {
      if (err) {
        res.status(500).send({
          message: 'error'
        })
      } else {
        res.status(200).send(null)
      }
    }
  )
}