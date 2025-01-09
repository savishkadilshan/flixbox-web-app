import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
 
const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}
 
export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}
 
export async function createSession(userId, role) {
  const expiresAt = new Date(Date.now() + (role === 'admin'? 1 * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000))
  const session = await encrypt({ userId, role, expiresAt })
  const cookieStore = await cookies()
 
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })

  console.log(`${role} session is created.`)
}
 
export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
  console.log("session is deleted.")
}