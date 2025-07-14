import { useState } from 'react'

export function HeroButton() {
  const [clicked, setClicked] = useState(false)

  return (
    <button
      className={`cta-button ${clicked ? 'active' : ''}`}
      onClick={() => setClicked(!clicked)}
    >
      Explorar Productos
    </button>
  )
}