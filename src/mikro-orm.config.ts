import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";

export default {
  entities: [Post],
  dbName: "react-graphql-reddit-clone-db",
  type: "postgresql",
  debug: !__prod__,
  user: "postgres",
  password: "bigbird",
} as Parameters<typeof MikroORM.init>[0];
