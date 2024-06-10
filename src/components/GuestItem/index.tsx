import React from 'react'
import { GuestItemProps } from '../../types/Guest'

export const GuestItem: React.FC<GuestItemProps> = ({
  guest,
  onDelete,
  onToggleEnabled,
}) => {
  return (
    <li>
      {guest.name} ({guest.enabled ? 'Enabled' : 'Disabled'})
      <button onClick={() => onToggleEnabled(guest.id)}>Toggle Enabled</button>
      <button onClick={() => onDelete(guest.id)}>Delete</button>
    </li>
  )
}
