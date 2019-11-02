import { NowRequest, NowResponse } from '@now/node'
import { Poem } from '../interfaces'
import Nexmo from 'nexmo'
const nexmo: any = new Nexmo({
  apiKey: process.env.KEY || '',
  apiSecret: process.env.SECRET || '',
  applicationId: process.env.ID || ''
})
const PHONE_NUMBER = process.env.PHONE_NUMBER

export default (req: NowRequest, res: NowResponse) => {
  const { to } = req.query
  const poem: Poem = {
    id: 1,
    title: 'The Student',
    poem: [
      'The student walked the streets downtown with the pace of a sloth. She kept her eyes on every passerby.',
      'A woman approached, "You’re using your sight to interrogate Downtown. What answer are you seeking?"',
      '"Whose eyes reveal a lifetime of love? I am looking for one who has seen all the pain and pleasure."',
      '"Well, there are all sorts down here, girl."',
      '"I am not looking for one whose heart has been broken and mended. I am neither looking for a man whose lust has led to the demise of his virtue nor a woman who spread open like a magazine only to have her pages torn. I am looking for one whose fingers felt the softness of another soul, whose toes curled into the grit of another spirit, whose stomach filled on the meat of another body, whose ears have heard the sound of another dream, whose eyelashes felt the tears of another cry, whose eyes blinded in the sight of love."'
    ]
  }

  nexmo.message.sendSms(
    '',
    to,
    poem.poem[0],
    (err: any) => {
      if (err) {
        res.status(500).send({
          message: 'error'
        })
      } else {
        res.json({
          message: 'success'
        })
      }
    }
  )
}