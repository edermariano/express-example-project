# Express, Jest, Supertest, ES6, GitHub Actions

![](https://github.com/edermariano/express-example-project/workflows/pr-tests/badge.svg?branch=master)

Just for study.

## Pre-requisites
* Docker
* docker-compose
* [optional] node v10
* [optional] npm
* [optional] `npm install -g yarn` - Yarn

## Instructions for DEV
* Clone this repository
* Setup the .env file by copying the .env.sample
* `docker-compose up` to run the application and additional images
* `yarn docker` or `docker exec -it lab-api sh` to get inside of the application docker image

## Additional Instructions
* Clone this repository
* Setup the .env file by copying the .env.sample
* `yarn install` - to install the dependencies
* `yarn test` - to run the tests
* `yarn db:migrate` - to run the migrations
* `yarn dev` - to run the application __(with nodemon)__

## Insomnia
To test the apis via insomnia, please import the `insomnia_todos_api.yaml` in your insomnia

## ToDo
 - [x] docker-compose with database image
 - [ ] localstack docker image for tests
 - [ ] serverless framework (deploy lambdas and create resources)
 - [ ] running DynamoDB, SQS, SNS... locally with localstack
