'use client'
import React, { useState } from 'react'
import { useTransition } from 'react'
import { CardWrapper } from './cardwrapper'
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel
} from "@/components/ui/form"
import { Button } from '../ui/button'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { register } from '@/actions/register'

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending,startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver:zodResolver(RegisterSchema),
    defaultValues:{
      name:"",
      email:"",
      password:"",
  } 
} 
  )
  const onSubmit = (values:z.infer<typeof RegisterSchema>)=>{
    startTransition(()=>{
      register(values)
        .then((data)=>{
          setError(data.error)
          setSuccess(data.success)
        })
    })
  }
  return (
    <CardWrapper
        headerLabel="Create an Account"
        backButtonLabel = "Already have an account?"
        backButtonHref='/auth/login'
        showSocial
    >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}
           className='space-y-6'  
          >
            <div className='space-y-4'>
              <FormField 
                control={form.control}
                name='name'
                render={({field})=>(
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} disabled = {isPending} type='text'></Input>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name='email'
                render={({field})=>(
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} disabled = {isPending} type='email'></Input>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />


              <FormField 
                control={form.control}
                name='password'
                render={({field})=>(
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} type='password'></Input>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error}/>
            <FormSuccess message={success}/>
            <Button variant="default" className='w-full' disabled={isPending} type='submit'>
                  Login
            </Button>
          </form>
        </Form>
    </CardWrapper>
  )
}
