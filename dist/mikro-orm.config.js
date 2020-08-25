"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const constants_1 = require("./constants");
exports.default = {
    entities: [Post_1.Post],
    dbName: "react-graphql-reddit-clone-db",
    type: "postgresql",
    debug: !constants_1.__prod__,
    user: "postgres",
    password: "bigbird",
};
//# sourceMappingURL=mikro-orm.config.js.map