import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const getImages = async (name: string) => {
  const command = new GetCommand({
    TableName: "Posts",
    Key: {
      UserName: name
    },
  });

  const response = await docClient.send(command);
  console.log(response)
  return response.Item?.Photos;
};

