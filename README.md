# TODO App — Full Stack

A full-stack TODO application built with React, Express.js, and MongoDB Atlas.

## Stack

| Layer    | Technology              |
|----------|-------------------------|
| Frontend | React + Vite + Tailwind |
| Backend  | Node.js + Express.js    |
| Database | MongoDB Atlas           |

## Project Structure

```
hiring-fullstack-todo/
├── client/    # React frontend
│   └── README.md
├── server/    # Express backend
│   └── README.md
└── README.md
```

## Quick Start

**1. Start the backend:**
```bash
cd server
cp .env.example .env   # fill in your MONGODB_URI
npm install
npm run dev
```

**2. Start the frontend:**
```bash
cd client
npm install
npm run dev
```

**3. Open** `http://localhost:5173`