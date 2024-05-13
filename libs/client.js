import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "igss3xou8g",
  apiKey: process.env.API_KEY,
});