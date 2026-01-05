'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { login, signup } from '@/services/auth-service'
import { getDemoUser, getEmptyCredentials } from '@/services/user-service'
import '@/assets/styles/components/LoginSignupForm.css'

export default function LoginSignupForm({ mode }: { mode: string }) {
	const [credentials, setCredentials] = useState(getEmptyCredentials())
	const router = useRouter()
	const { setUser } = useAuth()

	function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = ev.target
		setCredentials((prevState) => {
			return { ...prevState, [name]: value }
		})
		console.log('Submitted', credentials)
	}

	async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault()
		try {
			let user
			if (mode === 'login') {
				user = await login(credentials)
			} else {
				user = await signup(credentials)
			}
			
			console.log('user', user)
			setUser(user)
			setCredentials(getEmptyCredentials())
			router.push('/')
		} catch (err) {
			console.error(err)
		}
	}

	const { fullname, username, password, email } = credentials
	return (
			<form className="form flex" onSubmit={handleSubmit}>
				{mode === 'signup' && (
					<input
						type="text"
						name="fullname"
						value={fullname}
						placeholder="Full name"
						onChange={handleChange}
						required
						autoFocus={mode === 'signup'}
					/>
				)}
				{mode === 'signup' && (
					<input
						type="text"
						name="username"
						value={username}
						placeholder="Username"
						onChange={handleChange}
						required
					/>
				)}
				<input
					type="email"
					name="email"
					value={email}
					placeholder="Email"
					onChange={handleChange}
					required
					autoFocus={mode === 'login'}
				/>
				<input
					type="password"
					name="password"
					value={password}
					placeholder="Password"
					onChange={handleChange}
					required
				/>
				<button className="btn">
					{mode === 'signup' ? 'Signup' : 'Login'}
				</button>
				<button className="demo-user" type='button' onClick={()=> setCredentials(getDemoUser)}>
					Login with Demo User
				</button>
			</form>
	)
}
