import React, { useState } from 'react'
import { AddGuestFormProps } from '../../types/Guest'
import { Button, Form, Input } from './style'

export const AddGuestForm: React.FC<AddGuestFormProps> = ({ onAddGuest }) => {
  const [name, setName] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim()) return
    onAddGuest(name)
    setName('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter guest name"
      />
      <Button type="submit">Add Guest</Button>
    </Form>
  )
}
