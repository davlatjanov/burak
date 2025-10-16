import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

//------>1-ENTERANCE<---------
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/* function morgan(format) {
  // format = ':method :url :response-time [:status]'

  // prepare a "formatter function"
  const formatFn = compile(format);

  // return middleware to Express
  return function logger(req, res, next) {
    const start = Date.now();

    res.on('finish', () => {
      const responseTime = Date.now() - start;
      const line = formatFn(req, res, { responseTime });
      console.log(line);
    });

    next();
  };
}
}


function compile(format) {
  // Return a function that replaces tokens with real values
  return function (req, res, tokens) {
    return format
      .replace(':method', req.method)
      .replace(':url', req.originalUrl)
      .replace(':status', res.statusCode)
      .replace(':response-time', tokens.responseTime);
  };
}



*/

//------>2-SESSIONS<----------

//------>3-VIEWS<-------------
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//----->4-ROUTERS<------------
app.use("/admin", routerAdmin);
app.use("/", router); // SPA: REACT

export default app;
