import { MongoClient, ServerApiVersion } from 'mongodb';

export function getClient() {
  const uri = process.env.URI || ''

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  return client
}

