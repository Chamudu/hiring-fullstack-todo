# TODO App — Frontend

React + Vite + Tailwind CSS frontend for the TODO app.

## Prerequisites
- Node.js 18+
- Backend server running on `http://localhost:5000`

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Make sure the backend server is running first (see `../server/README.md`).

## Running

```bash
npm run dev
```

App runs on `http://localhost:5173`.

API requests to `/api/*` are proxied to `http://localhost:5000` via Vite's proxy config.

## Features

- View all todos
- Add a todo with title and optional description
- Edit a todo's title and description inline
- Toggle done/undone with a checkbox
- Delete a todo
- Completed todos shown with strikethrough and faded style
- Form validation — empty title is blocked
- Optimistic UI updates — changes appear instantly before API confirms
- Loading and error states handled gracefully

## Assumptions & Limitations

- Requires the backend to be running locally on port 5000.
- No authentication — single user assumed.