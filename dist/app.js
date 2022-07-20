"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const routes_1 = __importDefault(require("./routes"));
const server = http_1.default.createServer(routes_1.default);
server.listen(3000);
