import { Status } from '../interfaces'
const Nexmo = require('nexmo')
const nexmo: any = new Nexmo({
  apiKey: process.env.KEY || '',
  apiSecret: process.env.SECRET || '',
  applicationId: process.env.ID || '',
  privateKey: Buffer.from(process.env.PRIVATE_KEY as any, 'utf8')
})
const FB_PAGE_ID = '107660154057161'


export function sendMessage(message: string, fbRecipientId: string): Promise<Status> {
  const promise: Promise<Status> = new Promise<Status>((resolve, reject) => {
    // format the message to match the nexmo api
    const body = {
      content: {
        type: 'text',
        text: message
      }
    }
    nexmo.channel.send(
      { type: 'messenger', id: fbRecipientId },
      { type: 'messenger', id: FB_PAGE_ID },
      body,
      (err: any, data: any) => {
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
