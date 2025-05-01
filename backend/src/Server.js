import express from "express";
import cookieParser from "cookie-parser";
import { randomBytes } from "node:crypto";
import { addUser, getObjectByName } from "./database/queries.js";

const server = express();
server.use(express.json());
server.use(cookieParser());

class userObj {
  constructor(cookie, timeToLiveInMS) {
    this.cookie = cookie;
    this.objectsFound = { umbrella: false, "bottle-cap": false, "dart-board": false };
    this.startTime = Date.now();
    this.finishedTime = null;
    this.timeToLive = setTimeout(() => {
      usersTimerHolder.delete(name);
    }, timeToLiveInMS);
  }
}

const usersTimerHolder = new Map();

server.get("/api/", (request, response) => {
  const cookie = crypto.randomUUID();
  usersTimerHolder.set(cookie, new userObj(cookie, 1800000));

  response.cookie("key", cookie).json("TEST");
});

server.post("/api/checkobject/", async (request, response) => {
  const user = usersTimerHolder.get(request.cookies.key);
  const { xCoord, yCoord, objectName } = request.body;
  const objectInfo = await getObjectByName(objectName);
  if (
    xCoord > objectInfo.x_start &&
    xCoord < objectInfo.x_end &&
    yCoord > objectInfo.y_start &&
    yCoord < objectInfo.y_end
  ) {
    user.objectsFound[objectName] = true;
  }
  console.log(objectInfo);
  console.log(user);

  if (Object.values(user.objectsFound).every((value) => value === true)) {
    console.log("GAME WON");
    response.send("GAME WON");
  }
  response.send("check object test");
});

server.get("/api/finish", (request, response) => {
  const user = usersTimerHolder.get(request.cookies.key);
  const time = Date.now() - user.startTime;
  user.finishedTime = time;
  response.json("test get finish");
});

server.post("/api/users", (request, response) => {
  const name = request.body.name;
  const { finishedTime } = usersTimerHolder.get(request.cookies.key);
  addUser(name, finishedTime);
});

const PORT = 3500;

server.listen(PORT, () => console.log("Server at port: " + PORT));
