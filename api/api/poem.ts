import { NowRequest, NowResponse } from '@now/node'
import { Poem } from '../interfaces'
const Nexmo = require('nexmo')
const nexmo: any = new Nexmo({
  apiKey: process.env.KEY || '',
  apiSecret: process.env.SECRET || '',
  applicationId: process.env.ID || ''
})
const PHONE_NUMBER = process.env.PHONE_NUMBER

export default (req: NowRequest, res: NowResponse) => {

}