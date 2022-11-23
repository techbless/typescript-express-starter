import * as express from 'express';
import * as session from 'express-session';
import * as passport from 'passport';
import * as cors from 'cors';
import helmet from 'helmet';

import * as passportConfig from './config/passport';

import errorHandler from './middlewares/error_handler';

import UserRouter from './routes/user';
import EchoRouter from './routes/echo';

class App {
  public app!: express.Application;

  constructor() {
    this.app = express();
    this.app.set('trust proxy', true);

    // cors
    const WHITE_LIST = ['http://localhost:3000'];
    this.app.use(
      cors({
        origin: WHITE_LIST,
        credentials: true,
      }),
    );

    this.app.use(helmet());
    this.app.use(express.static(`${__dirname}/public`));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    /**
     * Recommendation: You should session store for saving session.
     */
    this.app.use(
      session({
        resave: true,
        saveUninitialized: true,
        secret: 'Input-your-own-secret-key-here.',
      }),
    );

    // Passport.js
    passportConfig.setStrategies();
    this.app.use(passport.initialize());
    this.app.use(passport.session());

    this.app.use('/', UserRouter);
    this.app.use('/', EchoRouter);

    // Error Handler
    this.app.use(errorHandler);
  }
}

export default new App().app;
