'use server'

import { deleteSession } from '@/app/_utils/session/session';
import { redirect } from 'next/navigation';
 
export default async function logout() {
  await deleteSession();
  redirect('/login');
}