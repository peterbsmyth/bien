import { Status } from '../interfaces'
import Nexmo from 'nexmo'
const nexmo: any = new Nexmo({
  apiKey: process.env.KEY || '',
  apiSecret: process.env.SECRET || '',
  applicationId: process.env.ID || ''
})
const PHONE_NUMBER = process.env.PHONE_NUMBER


export function sendMessage(message: string, sender: number): Promise<Status> {
  const promise: Promise<Status> = new Promise<Status>((resolve, reject) => {
    nexmo.message.sendSms(
      PHONE_NUMBER,
      sender,
      message,
      (err: any) => {
        if (err) {
          reject({
            sent: false,
            message: err
          })
        } else {
          resolve({
            sent: true,
            message: 'success'
          })
        }
      }
    )
  })
  return promise
}
