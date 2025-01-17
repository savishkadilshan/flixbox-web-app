'use server'

import { deleteSession } from '@/app/_utils/session/session';
import { redirect } from 'next/navigation';
 
export async function logout() {
  await deleteSession();
  redirect('/login');
}

export async function adminLogout(params) {
  await deleteSession();
  redirect('/admin/login');
}