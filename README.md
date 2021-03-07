
## Take Home Test Project

for applying Back-end Web Developer of Dcard 



### 📦 Setup Enviroment


Install dependencies with:

```bash
> npm install
```


### 🔨 Usage 

Unit test with mocha/chai: 

```bash
> npm run test
```

Run up server with nodemon: 

```bash
> npm run dev
```

Then you can test the api with http://localhost:3000/api/test



### 🎨 Ideas 


Create a "RateLimitController" as the middleware, 
this way we can define different rules for each router.

For example:

- limit 60 requests in 1 minutes for test api "/api/test"
- limit 20 requests in 1 hours for login/register api "/api/auth"
- ...


![My Ideas](https://drive.google.com/uc?export=view&id=1CP70nlS4fBbILGlQ79asqmYR3ngQyPIf)


