# Heicoders SE200 lesson 8 answers

## Running the project locally

1. Clone the repo

2. Replace the `.env` file with your local postgres connection in this format

```
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/YOUR_DATABASE_NAME?schema=public"
```

3. Generate your auth secret from auth js (default file it reads from is `.env.local`)

4. Install dependencies

```
npm install
```

5. start the local server

```
npm run dev
```
