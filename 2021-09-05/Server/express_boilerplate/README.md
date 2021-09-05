# express setting

# express

## 1. Install

```bash
npm i express
```

## 2. app.js

```jsx
// app.js
const express = require('express');

class App {
  constructor() {
    this.app = express();

    this.getRouting();

    this.status404();

    this.errorHandler();
  }

  getRouting() {
    /*
     * controllers
     */
    this.app.use(require('./controllers'));
  }

  status404() {
    /*
     * 404 Error Handler
     */
    this.app.use((req, res, _) => {
      res.status(404).render('common/404.html');
    });
  }

  errorHandler() {
    /*
     * Server Error Handler
     */
    this.app.use( (err, req, res,  _ ) => {
       res.status(500).render('common/500.html')
    });
  }
}

module.exports = new App().app;
```

## 3. server.js

```jsx
const app = require('./app.js');
const port = 3000;

app.listen( port, function(){
    console.log('Express listening on port', port);
});
```

## 4. controllers

```jsx
// /controllers/index.js
const { Router } = require('express');
const router = Router();

router.use('/', (req, res) => {
  res.send('hello express');
});

module.exports = router;
```

# Sequelize

## 1. Install

```bash
npm i requelize mysql2
```

## 2. DB 생성

```bash
mysql.server start 
mysql -u root -p
create database 이름;
show databases;
```

## 3. Sequelize Setting

```jsx
// /models/index.js
const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config(); //LOAD CONFIG

const sequelize = new Sequelize( process.env.DATABASE,
process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: '+09:00', //한국 시간 셋팅
    operatorsAliases: Sequelize.Op,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

let db = [];

fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf('.js')&& file !== 'index.js'
    })
    .forEach(file => {
        let model = sequelize.import(path.join(__dirname,
            file));
            db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if("associate" in db[modelName]){
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
```

```jsx
//.env
DATABASE = "데이터베이스명"
DB_USER = "아이디"
DB_PASSWORD = "패스워드"
DB_HOST = "DB호스트"
DB_DIALECT="DB유형"
```

## 4. app.js 과 DB 연결

```jsx
// app.js
const express = require('express');
//Load Sequelize
const db = require('./models');

class App {
  constructor() {
    this.app = express();

    this.dbConnection();

    this.getRouting();

    this.status404();

    this.errorHandler();
  }

  dbConnection() {
     /*
     * DB Connection
     */
    db.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
        return db.sequelize.sync();
      })
      .then(() => {
        console.log('DB Sync complete.');
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });
  }

  getRouting() {
    /*
     * controllers
     */
    this.app.use(require('./controllers'));
  }

  status404() {
    /*
     * 404 Error Handler
     */
    this.app.use((req, res, _) => {
      res.status(404).render('common/404.html');
    });
  }

  errorHandler() {
    /*
     * Server Error Handler
     */
    // this.app.use( (err, req, res,  _ ) => {
    //     res.status(500).render('common/500.html')
    // });
  }
}

module.exports = new App().app;
```

# View Engine

## 1. Install

```bash
npm i nunjucks	
```

## 2. app.js

```jsx
const express = require('express');
//Load Sequelize
const db = require('./models');
//Load Nunjucks
const nunjucks = require('nunjucks');

class App {
  constructor() {
    this.app = express();

    this.setViewEngine();

    this.dbConnection();

    this.getRouting();

    this.status404();

    this.errorHandler();
  }

  setViewEngine() {
    /*
     * Set Nunjucks
     */
    nunjucks.configure('template', {
      autoescape: true,
      express: this.app,
    });
  }

  dbConnection() {
    /*
     * DB Connection
     */
    db.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
        return db.sequelize.sync();
      })
      .then(() => {
        console.log('DB Sync complete.');
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });
  }

  getRouting() {
    /*
     * controllers
     */
    this.app.use(require('./controllers'));
  }

  status404() {
    /*
     * 404 Error Handler
     */
    this.app.use((req, res, _) => {
      res.status(404).render('common/404.html');
    });
  }

  errorHandler() {
    /*
     * Server Error Handler
     */
    // this.app.use( (err, req, res,  _ ) => {
    //     res.status(500).render('common/500.html')
    // });
  }
}

module.exports = new App().app;
```

# Global View Variable

Template에서 사용할 Global 변수 지정

```jsx
const express = require('express');
//Load Sequelize
const db = require('./models');
//Load Nunjucks
const nunjucks = require('nunjucks');

class App {
  constructor() {
    this.app = express();

    this.setLocals();

    this.setViewEngine();

    this.dbConnection();

    this.getRouting();

    this.status404();

    this.errorHandler();
  }

  setLocals() {
    /*
     * Set Global Variable
     */
    this.app.use((req, res, next) => {
      this.app.locals.siteName = 'mySite';
      next();
    });
  }

  setViewEngine() {
    /*
     * Set Nunjucks
     */
    nunjucks.configure('template', {
      autoescape: true,
      express: this.app,
    });
  }

  dbConnection() {
    /*
     * DB Connection
     */
    db.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
        return db.sequelize.sync();
      })
      .then(() => {
        console.log('DB Sync complete.');
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });
  }

  getRouting() {
    /*
     * controllers
     */
    this.app.use(require('./controllers'));
  }

  status404() {
    /*
     * 404 Error Handler
     */
    this.app.use((req, res, _) => {
      res.status(404).render('common/404.html');
    });
  }

  errorHandler() {
    /*
     * Server Error Handler
     */
    // this.app.use( (err, req, res,  _ ) => {
    //     res.status(500).render('common/500.html')
    // });
  }
}

module.exports = new App().app;
```

# Middleware

```jsx
const express = require('express');
//Load Sequelize
const db = require('./models');
//Load Nunjucks
const nunjucks = require('nunjucks');

class App {
  constructor() {
    this.app = express();

    this.setMiddleWare();

    this.setLocals();

    this.setViewEngine();

    this.dbConnection();

    this.getRouting();

    this.status404();

    this.errorHandler();
  }

  setMiddleWare() {
    /*
     * Set middleware
     */
    // ex) 아래와 같이 middleware 정의
    // this.app.use(bodyParser.json());
  }

  setLocals() {
    /*
     * Set Global Variable
     */
    this.app.use((req, res, next) => {
      this.app.locals.siteName = 'mySite';
      next();
    });
  }

  setViewEngine() {
    /*
     * Set Nunjucks
     */
    nunjucks.configure('template', {
      autoescape: true,
      express: this.app,
    });
  }

  dbConnection() {
    /*
     * DB Connection
     */
    db.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
        return db.sequelize.sync();
      })
      .then(() => {
        console.log('DB Sync complete.');
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });
  }

  getRouting() {
    /*
     * controllers
     */
    this.app.use(require('./controllers'));
  }

  status404() {
    /*
     * 404 Error Handler
     */
    this.app.use((req, res, _) => {
      res.status(404).render('common/404.html');
    });
  }

  errorHandler() {
    /*
     * Server Error Handler
     */
    // this.app.use( (err, req, res,  _ ) => {
    //     res.status(500).render('common/500.html')
    // });
  }
}

module.exports = new App().app;
```