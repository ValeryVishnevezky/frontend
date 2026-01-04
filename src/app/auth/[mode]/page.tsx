'use client'
import LoginSignupForm from '@/components/ui/LoginSignupForm'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import '@/assets/styles/pages/AuthPage.css'

export default function AuthPage() {
	const params = useParams() as { mode?: string }
	const mode = params.mode
	// const mode = null

	return (
		<div className="auth-page">
			{mode ? (
				<LoginSignupForm mode={mode} />
			) : (
				<p>Something went wrong please try again</p>
			)}
			{mode === 'login' ? (
				<Link href="/auth/signup">New user? Signup</Link>
			) : (
				<Link href="/auth/login">Already a member? Login</Link>
			)}
		</div>
	)
}
