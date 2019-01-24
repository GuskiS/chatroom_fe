# Chatoom Frontend

## Task

1. Has two pages landing page (shown when not connected to the server) and chat
   (shown only when connected to the server).
2. Landing page has a box to enter nickname, a button to connect, and also displays
   feedback like 'Failed to connect. Nickname already taken.', 'Server unavailable.' or
   'Disconnected by the server due to inactivity.'.
3. Chat page displays messages from the server together with the sender's nickname (but
   no messages from before the user's current session started), a box to enter a message,
   a button to send it, and a button to disconnect from the server.
4. Does not have any inactivity timeouts.
5. Should display landing page if it's disconnected from the server.

## Installation

```bash
# Install node dependencies
$ yarn install
```

```bash
# Create .env file based on .env.example
cp .env.example .env
```

## Running the app

```bash
$ yarn run start
```
