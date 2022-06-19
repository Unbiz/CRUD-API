# CRUD-API

Project to study NodeJs. Simple CRUD server.

## Install

Run `npm i` to install need packages.

## Run Server

Run `npm run start:dev` to start server on developer mode.

Run `npm run start:prod` to start server on production mode.

Run `npm run start:multi` to start server on cluster mode.

## Path and Port

Server start in localhost.

Server use port from .env file (8080 in default).

## Requests

### GET api/users is used to get all persons

Server should answer with status code 200 and all users records

### GET api/users/${userId}

Server should answer with status code 200 and and record with id === userId if it exists

Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)

Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist

### POST api/users is used to create record about new user and store it in database

Server should answer with status code 201 and newly created record

Server should answer with status code 400 and corresponding message if request body does not contain required fields

User is object that have following properties :
{
username: string;
age: number;
hobbies: string[ ];
}

### PUT api/users/{userId} is used to update existing user

Server should answer with status code 200 and updated record

Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)

Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist

User is object that have following properties :
{
username: string;
age: number;
hobbies: string[ ];
}

### DELETE api/users/${userId} is used to delete existing user from database

Server should answer with status code 204 if the record is found and deleted

Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)

Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist
