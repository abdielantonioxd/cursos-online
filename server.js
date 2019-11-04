
const globalPath = process.env.PLUGDO_GLOBAL_PATH || "./source/app.config.js";
global.settings = require(globalPath).settings()[process.env.PLUGDO_GLOBAL_ENV || "dev"];
const server = require("@dellasera/plugdo-server").server();
require("./content/modules/mongodb/config/configdb");
server.mvc.webserver.use(require("./content/modules/mongodb/inicio-session/api-session"));
server.mvc.webserver.use(require("./content/modules/mongodb/categorias/api-categoria"));
server.mvc.webserver.use(require("./content/modules/mongodb/courses/api-courses"));
server.mvc.webserver.use(require("./content/modules/mongodb/shopping-cart/shopping-cart"));
server.mvc.webserver.use(require("./content/modules/mongodb/pago/pagos"));
server.mvc.webserver.use(require("./content/modules/mongodb/myCourses/myCourses"));
const path = require("path");
const port = process.env.PORT === undefined ? 4000 : process.env.PORT;
server.start(port, path.resolve(__dirname));