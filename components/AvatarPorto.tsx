import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const AvatarPorto = () => {
  return (
    <div>
        <Avatar className='mx-auto'>
          <AvatarImage src="https://avatars.githubusercontent.com/u/37230456?v=4" alt='Benedict Nino GitHub Profile'/>
          <AvatarFallback>Benedict Ell Nino</AvatarFallback>
        </Avatar>
    </div>
  )
}

export default AvatarPorto