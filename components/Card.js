import React from 'react'
import Link from 'next/link'
import './Card.css'

const getDomain = url => {
  const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)
  return matches && matches[1]
}

export default ({image, domain}) => {
  return (
    <div className="card">
      <div className="card-image" style={{backgroundImage: `url(${image})`}} />
      <div className="card-text">
        <div className="card-domain">{domain}</div>
        <div className="card-title">OG Image - generate meta images on the fly</div>
        <div className="card-description">With ogimage you can generate meta images based on your current site</div>
      </div>
    </div>
  )
}
