export type GuestItemProps = {
  guest: Guest
  onDelete: (id: string) => void
  onToggleEnabled: (id: string) => void
}

export type AddGuestFormProps = {
  onAddGuest: (name: string) => void
}

export type GuestRequest = {
  name: string
  enabled: boolean
}

export type Guest = {
  id: string
} & GuestRequest
