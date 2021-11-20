## Oslash Backend Developer Task Submission NestJS API
#### Tasklink: https://getoslash.notion.site/OSlash-Backend-Engineering-Assignment-OSlash-Clone-6a72b110f7c24b8f928138a9a8ed0ee5

#### Oslash Backend Task in ExpressJS is Here: https://github.com/Meetmetha/oslash-expressjs 

#### RestAPI Hosted Live Here: [Check in Action](https://oslashnestjs.miteshmetha.com) 🥳 
### Technologies & Framework: NestJS - Mongodb - Meilisearch
The Task is completed by using NestJS as framework for API,   
MongoDB as Database and Meilisearch for Efficient search internally just like ElasticSearch   
Meilisearch is deployed here and requires APIKey for accsessing Data! [Check in Action](https://oslashsearch.miteshmetha.com)

### Steps to Setup
Note: git init is required before npm install
```
git clone https://github.com/Meetmetha/oslash-nestjs
cd oslash
git init
npm install
```
### Setup Enviornment & Keys: check env.example (Create filename : .env) 
Meilisearch has to be deployed and "shortcuts" index with primaryKey "_id" has to be created prior
Below are some required Keys
```
DB_HOST=mongodb://localhost:27017/dbname
DB_TYPE=mongodb
JWT_SECRET=jwtsecrethere
JWT_TTL=60h
MEILISEARCH_HOST=
MEILISEARCH_APIKEY=
```
### Run Project
```
npm run start:prod or npm run start
```
### Output 🥳
```
visit your localhost:8000 and follow below documentation
```
#### API Documentation: https://documenter.getpostman.com/view/14843355/UVCBC5Dz
#### NestAPI Live Hosted URL : https://oslashnestjs.miteshmetha.com

### Core Reason & KeyHighlights of project using NestJS
NestJS - framework based on typescript and its Moduler structure makes it easy maintainable code structure where multiple developers can simentenously code and merging is as easy as importing and adding module  

Database - It is followed via Repository design pattern which makes it easy to handle bussiness and database logics guide here https://cubettech.com/resources/blog/introduction-to-repository-design-pattern/ It helps in maintaining structure and queries, It also used ObjectionJS as ORM   

Meilisearch - This is the Key point which handles search and by using meilisearch instead of regex check or query check api is able to search effeciently with typo error checks and checks over all entered inputs even url, It works just like elasticsearch but easy to implement and use for our use case of searching. Unlike elasticsearch Meilisearch comes with Authentication  

Session management - This is done using JWT where since Jwt are stateless there exists central banned list of JWT tokens where tokens which are logged out are stored and middleware performs a check on it before executing authenticated routes  

### Troubleshooting 
Unable to fetch result :
Use "npm run dev" and check stack trace of Error
Getting Invalid Request in response :  
Pass authentication JWT like this   
Authorization: bearer Tokenhere
Auth Logic of device)
Reach me if needed info about It
Any other Issues :
Feel free to reach me   

### Reachme
Mitesh Metha  
https://miteshmetha.com
