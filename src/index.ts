// imports
import * as express from 'express';
import * as dotenv from 'dotenv';
import { JwtPayload } from 'jsonwebtoken';
import { AppDataSource } from './module/clientData';
import { clientRouter } from './routes/clientRouter';
import { menuRouter } from './routes/menuRouter';
import { restaurantRouter } from './routes/restaurantRouter';
import { orderRouter } from './routes/orderRouter';

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload // permet d'inserer un user a req pour l'id
        }
    }
}


// Init environment variables (see .env.local file if it doesn't exist go to README.md file)
dotenv.config({ path: '.env' });

AppDataSource.initialize().then(async () => {

    // Express server creation
    const app = express();
    const port = process.env.PORT || 8080;

    // for parsing application/json
    app.use(express.json());

    app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        if (err) {
            console.log(err);
            res.status(400).send({
                status: 'FAILED',
                data: "Bad request"
            });
        }
    });


    // Add headers before the routes are defined
    app.use(function (req, res, next) {

        res.setHeader('authorization', '');
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', 'true');

        // Pass to next layer of middleware
        next();
    });

    /************************************************
       * Add the route here
       */

    app.use('/api/menu', menuRouter);
    app.use('/api/order', orderRouter);
    app.use('/api/restaurant', restaurantRouter);
    app.use('/api/client', clientRouter);



    // Bind express server on port 8080
    app.listen(port, () => {
        console.log(
            `Express server has started on port ${port}. Open http://localhost:${port} to see results`
        );
    });
}).catch((error: unknown) => console.log(error))
