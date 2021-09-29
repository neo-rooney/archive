const express = require('express');
//Load Sequelize
const db = require('./models');
//Load Nunjucks
const nunjucks = require('nunjucks');
//Load bodyParser
const bodyParser = require('body-parser');

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
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
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
