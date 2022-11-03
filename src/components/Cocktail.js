import React from 'react'
import { Link } from 'react-router-dom'
export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          {/* 链接到单个的 这个不是单个页面 是指的单个的概述 */}
          details
        </Link>
      </div>
    </article>
  )
}
