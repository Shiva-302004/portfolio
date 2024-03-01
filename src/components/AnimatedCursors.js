import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
const AnimatedCursors = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={40}
      color='193,11,111'
      outerAlpha={0.3}
      outerScale={0.3}
      innerScale={0.3}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}

export default AnimatedCursors