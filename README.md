
## Take Home Test Project

for applying Back-end Web Developer of Dcard 


## 🔗 Demo Link

[Live Demo on HeroKu](https://dc-take-home-test.herokuapp.com/)


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

Then you can do the test the web page http://localhost:3000/

or you can call testing [get] api "http://localhost:3000/api/test" directly 



### 🎨 Ideas 


Create a "**RateLimitController**" as the middleware, 
this way we can define different rules for each router.

For example:

- limit 60 requests in 1 minutes for test api "/api/test"
- limit 20 requests in 1 hours for login/register api "/api/auth"
- ...

**Note**: we allow the api to attach mock-ip as query-parameter

- you can test mock-ip with http://localhost:3000/api/test?ip={mock-ip}

![My Ideas](https://drive.google.com/uc?export=view&id=1CP70nlS4fBbILGlQ79asqmYR3ngQyPIf)


