# A Rest API for Security Scan Result

Implement a RESTful API to CRUD a Security Scan Result (“Result”).

## The Result Object

    Id: any type of unique id
    Status: "Queued" | "In Progress" | "Success" | "Failure"
    RepositoryName: string
    Findings: JSONB, see example
    QueuedAt: timestamp
    ScanningAt: timestamp
    FinishedAt: timestamp

## Prerequisite

 * [Node.js](https://nodejs.org/en/download/)
 * [NPM](https://www.npmjs.com/get-npm)

## How to run

First, install node modules

```
npm install
```

then, start the server with

```
npm start
```


## Tests

Execute the following conmand:

```
npm run test
```

## Linter

Check code style, run

```
npm run lint
```

or

```
npm run lint:fix
```

### The project structure

		.
		├── README.md
		├── app.js
		├── config
		│   └── config.json
		├── controllers
		│   └── result.js
		├── data
		│   └── database.sqlite
		├── db.js
		├── models
		│   ├── index.js
		│   └── result.js
		├── package-lock.json
		├── package.json
		├── routes
		│   ├── index.js
		│   └── results.js
		└── test
			└── test.js

### Endpoints

 - **/** :
    - Method: **POST**
      - Description: Create a new scan result
      - Body: repositoryName

 - **/** :

    - Method: **GET*
      - Description: Return all scan result data

 - **/{id}** :

    - Method: **GET*
      - Description: Return a scan result data

 - **/{id}** :

    - Method: **UPDATE**
      - Description: Update the given scan result fields
      - Body: repositoryName

 - **/{id}** :

    - Method: **DELETE**
      - Description: Delete a given scan result
