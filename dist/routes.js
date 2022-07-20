"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const requestHandler = (req, res) => {
    const { url, method } = req;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Node Js Enter Message</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button>Send</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            console.log("chunk", chunk);
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs_1.default.writeFile("message.txt", message, (err) => {
                console.log("Loggig writ file error", err);
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Js</title></head>");
    res.write("<body><h2>Hello from my node js server</h2></body>");
    res.write("</html>");
    res.end();
};
exports.default = requestHandler;
