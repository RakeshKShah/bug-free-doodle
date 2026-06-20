import { app } from "./index";
import createServer from "@vendia/serverless-express";

const server = createServer({ app });

export const handler = async (event: any, context: any) => {
  return server(event, context);
};
