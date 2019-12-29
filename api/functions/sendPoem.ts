import { Poem } from '../interfaces'
import { sendMessage, delay } from './'


export async function sendPoem (poem: Poem, fbRecipientId: number): Promise<boolean> {
  const { lines, title } = poem
  const boldTitle = `*${title}*`
  await sendMessage(boldTitle, fbRecipientId).catch(err => console.dir(err))
  while (lines.length) {
    const line = lines[0]
    await sendMessage(line.text, fbRecipientId).catch(err => console.dir(err))
    await delay(line.duration)
    lines.shift()
  }

  return true
}