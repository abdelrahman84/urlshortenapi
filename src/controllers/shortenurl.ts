import { Router, Request, Response, NextFunction } from 'express';
const cryptoRandomString = require('crypto-random-string');
import ShortenURL from '../models/shortenurl';


export class URLShorten {
    router: Router
    constructor() {
        this.router = Router();
        this.init();
    }

    public shortenURL(req: Request, res: Response, next: NextFunction) {
        let input = req.body.original_url;
        if (!input) {
            res.status(400).send({ status: 'error', message: 'original URL can`t be empty' });
        } else {
        let converted = 'https://pbid.io/' + cryptoRandomString({length: 8});
        var data = {
            original_url: req.body.original_url,
            converted_url: converted,
        };
        var newURL = new ShortenURL(data);
        newURL.save(function (error) {
            // console.log(newURL);
            if (error) {
                throw error;
            }
            res.json({ status: 'success', newURL });
        });
        }
    }

    public getShortenURls(req: Request, res: Response) {
        ShortenURL.find({}, function (err, urls) {
            res.json({urls: urls})
        });   
    }

    init() {
        this.router.post('/shortenurl', this.shortenURL);
        this.router.get('/shortenurls', this.getShortenURls);
    }
}

const urlShorten = new URLShorten();
urlShorten.init();

export default urlShorten.router;