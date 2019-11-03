import { Poem } from '../interfaces'
import { sendMessage } from './'


export async function sendPoem (poem: Poem, sender: number): Promise<boolean> {
  const lines = poem.poem
  while (lines.length) {
    const line = lines[0]
    await sendMessage(line, sender)
    lines.shift()
  }

  return true
}