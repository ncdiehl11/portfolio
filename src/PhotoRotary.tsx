import { useState, useEffect, useCallback } from 'react'

import surfing from './assets/CC39BF7C-8B49-4A28-B943-0D24BF8BF371.jpg'
import cooking from './assets/IMG_0284.jpeg'
import baseball from './assets/IMG_0348.jpeg'
import formal from './assets/IMG_5806.jpeg'
import hiking from './assets/IMG_9961.jpeg'

const photos = [
  { src: formal, alt: 'Dressed up abroad' },
  { src: hiking, alt: 'Hiking the Grand Canyon' },
  { src: surfing, alt: 'Surfing vibes' },
  { src: cooking, alt: 'In the kitchen' },
  { src: baseball, alt: 'Playing baseball' },
]

const INTERVAL_MS = 4000

export default function PhotoRotary() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % photos.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <div
      className="rotary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="rotary-frame">
        {photos.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className={`rotary-image ${i === active ? 'rotary-image-active' : ''}`}
            draggable={false}
          />
        ))}
      </div>
      <div className="rotary-dots">
        {photos.map((_, i) => (
          <button
            key={i}
            className={`rotary-dot ${i === active ? 'rotary-dot-active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
