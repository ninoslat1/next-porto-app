import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='mx-auto p-5'>
            <Card>
                <CardHeader>
                    <div className='flex items-center justify-between'>
                        <div className='block text-2xl'>
                            <CardTitle>Greetings</CardTitle>
                            <CardDescription>Welcome to my portfolio</CardDescription>
                        </div>
                        <Link href={process.env.GITHUB_PROFILE!} target='_blank'>
                            <Avatar>
                                <AvatarImage src="https://avatars.githubusercontent.com/u/37230456?v=4" alt='Benedict Nino GitHub Profile'/>
                                <AvatarFallback>Benedict Ell Nino</AvatarFallback>
                            </Avatar>
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                    <p>Hello 👋 My name is Benedict Ell Nino. I'am a specialist in Front End Developer and beginner in Back End Developer. Currently, i'm working in 
                        <b>
                            <span className='text-blue-500'> Sistem</span> 
                            <span className='text-red-500'> Aksesindo</span> 
                            <span className='text-lime-500'> Perdana </span>
                        </b>
                        as <i>Research and Development</i> team. Here is my most used language or framework</p>
                </CardContent>
                <CardFooter>
                    <Button>
                        <Link href={"/"}>Check My Portfolio</Link>
                    </Button>
                </CardFooter>
            </Card>
    </div>
  )
}

export default About