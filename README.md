
# Login Form

This is the login form with auto login facility if the token is present in the local storage. This could be used in any project where you want login feature. I have used mongodb as the database to store the login database

## Features

- Simple login form
- Auto login available
- The token is stored in local storage


## Tech Stack

**Client:** React, Axios, Material ui

**Server:** Node, Express, Mongodb, Mongoose, JsonWebToken


## Run Locally

Clone the project

```bash
  git clone https://github.com/ArjunVarshney/Login-form.git
```

Go to the project directory

```bash
  cd Login-form
```

Install dependencies in frontend

```bash
  cd client; npm install
```

Install dependencies in backend

```bash
  cd server; npm install
```

Start the server

```bash
  cd server; npm run dev
```

Start the client side

```bash
  cd client; npm start
```

I have destroyed the shared mongodb server, I was using while development, use your own mongodb database and change the mongo uri and the env variable accordingly.

## Acknowledgements

 - Multiple docs I visited on google
 - [freeCodeCamp Lecture on youtube](https://youtu.be/9zUHg7xjIqQ)
 - [A project playlist by "Code by interview"](https://youtube.com/playlist?list=PL_6klLfS1WqHNuSuL25VSgiuuFoEvLVqy)
 - [A video on jwt authentication by "Traversy media"](https://youtu.be/7nafaH9SddU)

## Authors

- [@ArjunVarshney](https://github.com/ArjunVarshney)

