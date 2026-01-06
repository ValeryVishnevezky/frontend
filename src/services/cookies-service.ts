import { cookies } from 'next/headers'

export async function getCookies() {
	const cookieStore = await cookies()
	const cookieHeader = cookieStore.toString()
	return { Cookie: cookieHeader }
}
