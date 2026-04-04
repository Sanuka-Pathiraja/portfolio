import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const outerRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return undefined

    const state = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      visible: false,
      rafId: 0,
    }

    const setPosition = (element, x, y, scale) => {
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`
    }

    const onPointerMove = (event) => {
      state.targetX = event.clientX
      state.targetY = event.clientY
      state.visible = true
      outer.style.opacity = '1'
      inner.style.opacity = '1'
    }

    const onPointerLeave = () => {
      state.visible = false
      outer.style.opacity = '0'
      inner.style.opacity = '0'
    }

    const onPointerDown = (event) => {
      state.targetX = event.clientX
      state.targetY = event.clientY
      state.visible = true
      outer.style.opacity = '1'
      inner.style.opacity = '1'
      outer.style.transform = 'translate(-50%, -50%) scale(1.15)'
      inner.style.transform = 'translate(-50%, -50%) scale(0.85)'
    }

    const animate = () => {
      state.x += (state.targetX - state.x) * 0.14
      state.y += (state.targetY - state.y) * 0.14

      if (state.visible) {
        setPosition(outer, state.x, state.y, 1)
        setPosition(inner, state.x, state.y, 1)
      }

      state.rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave, { passive: true })
    state.rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(state.rafId)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <div aria-hidden="true" className="cursor-glow-layer">
      <span ref={outerRef} className="cursor-glow cursor-glow--outer" />
      <span ref={innerRef} className="cursor-glow cursor-glow--inner" />
    </div>
  )
}