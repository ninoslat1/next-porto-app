import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import React from 'react'
import { CardHeader, CardTitle, CardDescription, CardContent, Card, CardFooter } from './ui/card'
import { SkillIconsList } from './SkillIconsList'
import { Separator } from './ui/separator'

export const CardPorto = () => {
  return (
    <div className='text-center'>
        <Card className='shadow-none border-none'>
                <CardHeader>
                    <div className='items-center justify-between text-xl'>
                        <CardTitle>Tech Info</CardTitle>
                    </div>
                </CardHeader>
                <Separator className='my-1 py-0.5 rounded-lg bg-slate-900'/>
                <CardContent className='py-1'>
                    <div>
                        <p className='text-lg'>Knowledge</p>
                        <Separator className='my-1 py-[0.0625rem] rounded-lg bg-slate-900'/>
                        <SkillIconsList/>
                    </div>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
    </div>
  )
}

export default Card