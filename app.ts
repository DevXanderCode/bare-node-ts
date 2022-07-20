import http from "http";
import { IncomingMessage, ServerResponse } from "http";

import routes from "./routes";

const server = http.createServer(routes);

server.listen(3000);
