# A Rest API for Security Scan Result

Implement a RESTful API to CRUD a Security Scan Result (“Result”).

## Result

    Id: any type of unique id
    Status: "Queued" | "In Progress" | "Success" | "Failure"
    RepositoryName: string
    Findings: JSONB, see example
    QueuedAt: timestamp
    ScanningAt: timestamp
    FinishedAt: timestamp

## Prerequisite

 * [Node.js](https://nodejs.org/en/download/)

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

Execute

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
      - Description: Create a new scan.
      - Body: repositoryName

    - Method: **GET*
      - Description: Return a result data.

    - Method: **UPDATE**
      - Description: Update the user's fields.
      - Body: repositoryName

    - Method: **DELETE**
      - Description: Delete a given scan result.
      - Query String: result
