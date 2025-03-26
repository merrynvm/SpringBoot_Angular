# Spring-Boot WEB with Angular

~ In /angular there is a run.sh for running correctly angular with parameters
```
npm run start
```

~ Angular has a proxy.conf.json for redirect of 8080 port (tomcat)

```
{
    "/api": {
      "target": "http://localhost:8080",
      "secure": false,
      "changeOrigin": true,
      "logLevel": "debug"
    }
  }
```
