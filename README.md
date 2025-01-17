# FlixBox Video Game Wishlist Manager

![flixbox-logo-png](https://firebasestorage.googleapis.com/v0/b/personalstorage-d06c5.appspot.com/o/flixbox%2Fimportant%2FFlixBlox.png?alt=media&token=88adfba4-91c8-4c8d-98ec-3da96e934348)

**FlixBox** is a video game wishlist manager. This web application allows users to create and manage a wishlist for video games by adding their favorite titles.

The application is currently under development.

## Instructions to Test the Application

### 1. Clone the Repository

Since the application is currently under development, there may be some bugs, and certain features might not work as expected.

### 2. Installing Dependencies

```bash
npm install
```
or
```bash
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory.

Set the following variables with your own values.

```bash
NEXT_PUBLIC_MONGODB_URI=######

NEXT_PUBLIC_FIREBASE_API_KEY=######
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=######
NEXT_PUBLIC_FIREBASE_PROJECT_ID=######
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=######
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=######
NEXT_PUBLIC_FIREBASE_APP_ID=######

SESSION_SECRET=######
```

### 4. Running the Application

Once you have set up the environment variables, you can run the application.

```bash
npm run dev
```
or
```bash
yarn dev
```

The application will run at `http://localhost:3000`.