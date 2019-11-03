import { Poem } from '../interfaces'

export function getSenderNextPoem(sender: number): Promise<Poem> {
  const poem: Poem = {
    id: 1,
    title: 'The Student',
    lines: [{
      text: 'The student walked the streets downtown with the pace of a sloth. She kept her eyes on every passerby.',
      duration: 1200
    }, {
      text: 'A woman approached, "You\'re using your sight to interrogate Downtown. What answer are you seeking?"',
      duration: 1200,
    }, {
      text: '"Whose eyes reveal a lifetime of love? I am looking for one who has seen all the pain and pleasure."',
      duration: 1100
    }, {
      text: '"Well, there are all sorts down here, girl."',
      duration: 1100
    }, {
      text: '"I am not looking for one whose heart has been broken and mended. I am neither looking for a man whose lust has led to the demise of his virtue nor a woman who spread open like a magazine only to have her pages torn. I am looking for one whose fingers felt the softness of another soul, whose toes curled into the grit of another spirit, whose stomach filled on the meat of another body, whose ears have heard the sound of another dream, whose eyelashes felt the tears of another cry, whose eyes blinded in the sight of love."',
      duration: 0
    }]
  }

  const promise: Promise<Poem> = new Promise<Poem>((resolve, reject) => {
    resolve(poem)
  })

  return promise
}