import { Keywords } from '../enums'

export function parseText(text: string): boolean {
  const formattedText = text.toUpperCase()
  return formattedText === Keywords.NEXT
}