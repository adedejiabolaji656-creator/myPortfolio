import { useEffect, useState } from 'react'

export function useTypewriter(
  words: string[],
  typingSpeed = 110,
  deletingSpeed = 55,
  pause = 1700,
): string {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timeout: number | undefined

    if (!deleting && text === word) {
      timeout = window.setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = window.setTimeout(
        () => setText(word.substring(0, text.length + (deleting ? -1 : 1))),
        deleting ? deletingSpeed : typingSpeed,
      )
    }

    return () => {
      if (timeout !== undefined) window.clearTimeout(timeout)
    }
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return text
}
