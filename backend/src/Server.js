import express from "express";
import cookieParser from "cookie-parser";
import { randomBytes } from "node:crypto";

const server = express();
server.use(cookieParser());

class userObj {
  constructor(cookie, timeToLiveInMS) {
    this.cookie = cookie;
    this.startTime = Date.now();
    this.finishedTime = null;
    this.timeToLive = setTimeout(() => {
      usersTimerHolder.delete(name);
    }, timeToLiveInMS);
  }
}

const usersTimerHolder = new Map();
// usersTimerHolder.set("test1", new userObj("test1", 10000));

// setTimeout(() => {
//   const test = usersTimerHolder.get("test1");
//   const timeToCalc = Date.now() - usersTimerHolder.get("test1").timer;
//   console.log(timeToCalc);
// }, 5000);

// setTimeout(() => {
//   console.log(usersTimerHolder);
// }, 10000);

server.get("/api/", (request, response) => {
  const cookie = crypto.randomUUID();
  usersTimerHolder.set(cookie, new userObj(cookie, 1800000));

  response.cookie("key", cookie).json("TEST");
});

server.get("/api/finish", (request, response) => {
  const user = usersTimerHolder.get(request.cookies.key);
  const time = Date.now() - user.startTime;
  user.finishedTime = time;
  response.json("test get finish");
});

const PORT = 3500;

server.listen(PORT, () => console.log("Server at port: " + PORT));
