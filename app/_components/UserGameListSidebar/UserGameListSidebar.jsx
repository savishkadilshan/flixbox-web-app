'use client'

import LogoutButton from "../LogoutButton/LogoutButton"

export default function UserGameListSidebar() {
    return (
        <div className="flex-1">
            My List
            <LogoutButton />
        </div>
    )
}