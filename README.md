# Express, Jest, Supertest, ES6, GitHub Actions

![](https://github.com/edermariano/express-example-project/workflows/pr-tests/badge.svg?branch=master)

Just for study.

## Instructions

* Clone this repository
* Setup the .env file by copying the .env.sample
* `npm install -g yarn` - to use yarn
* `yarn install` - to install the dependencies
* `yarn test` - to run the tests
* `yarn db:migrate` - to run the migrations
* `yarn dev` - to run the application __(with nodemon)__


## Insomnia
To test the apis via insomnia, please import the `insomnia_todos_api.yaml` in your insomnia

## ToDo
 - [ ] docker-compose with this image and localstack for tests
 - [ ] serverless framework (deploy lambdas and create resources)
 - [ ] running DynamoDB, SQS, SNS... locally with localstack
