# Heicoders SE200 lesson 7 answers

## Running the project locally

1. Clone the repo
```
git clone https://github.com/hoppybunny/heicoders-se200-l7-prisma-intro.git
cd heicoders-se200-l7-prisma-intro.git
```

2. Replace the `.env` file with your local postgres connection in this format
```
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/YOUR_DATABASE_NAME?schema=public"
```

3. Install dependencies
```
npm install
```

4. start the local server
```
npm run dev
```

## What you should see
1. When local server first spins up:

<img src="image.png" width="300" />

2. Exercise 3: http://localhost:3000/

<img src="image-1.png" width="500" />

3. When accordian opens 

<img src="image-2.png" width="500" />

4. Exercise 4 and 5: http://localhost:3000/register

<img src="image-3.png" width="500" />

5. When the country dropdown is opened

<img src="image-4.png" width="500" />