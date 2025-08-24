import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("68a4a6ab0006e7a9a652"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
