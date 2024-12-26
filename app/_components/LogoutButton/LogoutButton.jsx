import logout from "./actions";

export default function LogoutButton() {
    return (
        <form action={logout}>
            <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
                Log out
            </button>
        </form>
    );
}
