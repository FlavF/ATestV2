# Test A V2 [ongoing]

Start 2022/12/

## Table of Contents
1. [General Info](#general-info)
2. [Stacks](#stacks)
3. [Rules](#rules)
4. [Installation](#installation)
5. [Pages](#pages)
6. [Use](#use)
7. [TODOS](#todos)

<br/>

### General Info
---
Node.js Typescript API MVC V2

<br/>

### Stacks
---
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [csvtojson](https://www.npmjs.com/package/csvtojson)
- [jest](https://jestjs.io/)


<br/>

### Installation
---

Terminal commands used : V1

```
$ npm init // To install package.json
$ npm install typescript --save-dev   // To install TS and also node_modules
$ npm install --save-dev lite-server // To visualise
$ npx tsc --init
npx tsc -w   // TS watch mode (separate terminal window)
$ npm install nodemon --save-dev //to compile JS code when update
$ npm install csvtojson --save // To get data from csv to json files
$ npm install --save-dev jest ts-jest @types/jest  //To test
```


Terminal commands used : V2

```


```


<br/>

### Pages
---


#### Files to update
.gitignore :
- node_modules
- data/events.csv (don't know if a private file or not))

normally in .gitignore but to show the work it's better to let it :
- SRC/


<br/>

### Use
---
- go to url : "https://localhost:8000/api/events/${lat&lon}" or "https://${port}/api/events/${lat&lon}"
- get json file with clicks and impressions

<br/>

### Todos
- [ ] asynchronous function to correct CSVTOJSON(read the fil without waiting for the result, promise to do () )
- [ ] convertToJson => too much call to the same function findTheCoordinates
- [ ] type all datas
- [ ] more optimisation 
- [ ] test for json file to do the 1st function
- [ ] add tests
- [ ] check errors

<br/>

#### IDEA for the API
---
- [ ] cronjob to update the CSV file if generate auto and the JSon file auto




