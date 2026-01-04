export type Credentials = {
  fullname?: string
  email: string
  username?: string
  password: string
}

export interface User {
	_id: string
	username: string
	fullname: string
	email: string
	isAdmin: boolean
	createdAt: Date
	imgUrl?: string | null
}

export interface AuthContextType {
  user: User | null
  setUser: (user: User | null) => void
  loading?: boolean
}