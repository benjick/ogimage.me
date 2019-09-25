import React from 'react'
import Link from 'next/link'

export default () => {
  const [link, setLink] = React.useState('http://ogimage.me')
  return (
    <div>
      <input value={link} onChange={e => setLink(e.target.value)} />
      <code style={{ display: 'block' }}>&lt;meta property="og:image" content="https://ogimage.me/api/v1/{ link }"&gt;</code>
      <code style={{ display: 'block' }}>&lt;meta property="twitter:image" content="https://ogimage.me/api/v1/{ link }"&gt;</code>
      <blockquote>Elements with the class <code>hide-for-ogimage</code> won't be rendered</blockquote>
    </div>
  )
}
