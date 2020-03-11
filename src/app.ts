import * as express from 'express';
import * as session from 'express-session';
import * as passport from 'passport';

import IndexRouter from './routes/index.route';
import UserRouter from './routes/user.route';

class App {
  public app!: express.Application;

  constructor() {
    this.app = express();

    this.app.use(express.static(`${__dirname}/public`));
    this.app.set('view engine', 'ejs');
    this.app.set('views', `${__dirname}/views`);

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

    this.app.use(passport.initialize());
    this.app.use(passport.session());

    this.app.use('/', IndexRouter);
    this.app.use('/', UserRouter);
  }
}

export default new App().app;
