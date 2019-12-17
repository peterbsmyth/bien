import { Poem } from '../interfaces'
import { sendMessage, delay } from './'


export async function sendPoem (poem: Poem, fbRecipientId: string): Promise<boolean> {
  const { lines, title } = poem
  await sendMessage(title, fbRecipientId).catch(err => console.dir(err))
  while (lines.length) {
    const line = lines[0]
    await sendMessage(line.text, fbRecipientId).catch(err => console.dir(err))
    await delay(line.duration)
    lines.shift()
  }

  return true
}