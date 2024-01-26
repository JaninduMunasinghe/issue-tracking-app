'use client'
import { TextField, TextArea, Button } from '@radix-ui/themes'
import React from 'react'

const newIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder="Title" />
        </TextField.Root>
        <TextArea placeholder="Reply to comment…" />
        <Button className=''>Submit New Issue</Button>
    </div>
  )
}

export default newIssuePage