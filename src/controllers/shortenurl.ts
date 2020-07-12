import {Router, Request, Response, NextFunction} from 'express';

export class URLShorten {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  public test(req: Request, res: Response) {
    res.json({ status: 'success' });
  }

  init() {
    this.router.get('/test', this.test);
  }
}

const urlShorten = new URLShorten();
urlShorten.init();

export default urlShorten.router;