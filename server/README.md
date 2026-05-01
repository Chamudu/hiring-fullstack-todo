# TODO App — Backend

Express.js REST API with MongoDB Atlas.

## Prerequisites
- Node.js 18+
- A MongoDB Atlas account (free tier works)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in this folder:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/todos?appName=<appname>
   ```

3. Replace the `MONGODB_URI` value with your own Atlas connection string.

## Running

Development (auto-restart on save):
```bash
npm run dev
```

Production:
```bash
npm start
```

Server runs on `http://localhost:5000`.

## API Endpoints

| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| GET    | /api/todos            | Get all todos        |
| POST   | /api/todos            | Create a new todo    |
| PUT    | /api/todos/:id        | Update title/desc    |
| PATCH  | /api/todos/:id/done   | Toggle done status   |
| DELETE | /api/todos/:id        | Delete a todo        |

## MongoDB Notes

- Uses MongoDB Atlas (cloud). No local MongoDB installation needed.
- The database `todos` and collection `todos` are created automatically on first insert.
- Network Access in Atlas must allow your IP (or `0.0.0.0/0` for development).

## Assumptions & Limitations

- No authentication — all todos are shared (single user assumed).
- No pagination — all todos are returned in one request.