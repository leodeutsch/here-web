import React, { useEffect, useState } from 'react'
import { addGuest, deleteGuest, fetchGuests, updateGuest } from '../../server/guestService'
import { Guest, GuestRequest } from '../../types/Guest'
import { AddGuestForm } from '../AddGuestForm'
import { GuestItem } from '../GuestItem'
import { Container, List } from './style'

export const GuestListContainer: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>([])

  useEffect(() => {
    fetchGuests().then(setGuests)
  }, [])

  const handleAddGuest = async (name: string) => {
    const guest: GuestRequest = {
      name,
      enabled: true,
    }

    await addGuest(guest)
    fetchGuests().then(setGuests)
  }

  const toggleGuestStatus = async (id: string) => {
    const guestToUpdate = guests.find((guest) => {
      if (guest.id === id) {
        guest.enabled = !guest.enabled
        return guest
      }
    }) as Guest

    await updateGuest(guestToUpdate)
    fetchGuests().then((updatedGuests) => setGuests(updatedGuests))
  }

  const deleteGuestById = async (id: string) => {
    await deleteGuest(id)
    fetchGuests().then(setGuests)
  }

  return (
    <Container>
      <AddGuestForm onAddGuest={handleAddGuest} />
      <List>
        {guests.map((guest) => (
          <GuestItem
            key={guest.id}
            guest={guest}
            onDelete={() => deleteGuestById(guest.id)}
            onToggleEnabled={() => toggleGuestStatus(guest.id)}
          />
        ))}
      </List>
    </Container>
  )
}
