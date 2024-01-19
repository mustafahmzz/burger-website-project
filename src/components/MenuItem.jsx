import React from 'react'
import '../styles/Menu.css'
export default function MenuItem({image,name,content,price}) {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage: `url(${image})`}}> 
      </div>
      <h1>{name}</h1>
      <h5>{content}</h5>
      <p>
        <i style={{color: 'red' }}>{price} TL</i>
      </p>
    </div>
  )
}
