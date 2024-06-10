import axios from 'axios'
import { Guest, GuestRequest } from '../types/Guest'

const apiClient = axios.create({ baseURL: 'http://localhost:1708' })

export const fetchGuests = async (): Promise<Guest[]> => {
  const response = await apiClient.get('/guests')
  return response.data
}

export const addGuest = async (guest: GuestRequest): Promise<void> => {
  await apiClient.post('/guests', guest)
}

export const updateGuest = async (guest: Guest): Promise<void> => {
  await apiClient.put(`/guests/${guest.id}`, {
    name: guest.name,
    enabled: guest.enabled,
  })
}

export const deleteGuest = async (id: string): Promise<void> => {
  await apiClient.delete(`/guests/${id}`)
}
