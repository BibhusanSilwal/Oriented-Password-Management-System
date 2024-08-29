'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
interface BackButtonProps{
    label:string,
    href:string
}
export const BackButton = ({label,href}:BackButtonProps) => {
  return (
    <Button
    variant="link"
    className='w-full'
    >
        <Link href={href}>
          {label}
        </Link>
    </Button>
  )
}
