import { NextRequest, NextResponse } from "next/server";
import { createInterface } from "readline/promises";
import {
    S3Client,
    PutObjectCommand,
    CreateBucketCommand,
    DeleteObjectCommand,
    DeleteBucketCommand,
    paginateListObjectsV2,
    GetObjectCommand,
    S3ClientConfig,
} from "@aws-sdk/client-s3";

// export async function GET(request: NextRequest) {
// const credentials = {
//     region: 'us-east-2',
//     credentials: {
//         accessKeyId: 'ASIATXJBYE73I7BJ4KYI',
//         secretAccessKey: 'tAMXuL3bgKqsGdFh888ZCzHp0bZKoAoR7XWS+EMo',
//         sessionToken: 'IQoJb3JpZ2luX2VjEKX//////////wEaCXVzLWVhc3QtMiJGMEQCIA5433I03JfXgBrFajG7OPxuPM9QHuVnEPTbJGmDG2cEAiBNayrkR8tUEzIPfRSCbxbA450GRkQYsUbsSvABEhV4MCr6Agi+//////////8BEAIaDDI1NjE1ODIxNDEzNCIMvyE/FXpHTOtqIyTgKs4C/RB3OizxyejBsIbZdCHVugP1iiQU6ITb1+MUmXg3ThIYxDEmC37qOJU3zkK6GjM47e8cG4AG3PJTZqwRZr6nDU4AH1MhObT60+vfClsxorBGKApY1s/j9Oc8ZpYaLt2wCh6HJO1cuOpyS9L/aN/hKIqY6v3ep9+6uQsBx5xO7BhQoETXvtX8Fm9YyVjh/hUX6p9Fkoxoz4xKdnXoyhVb5bpImZ3fegH14Qg8V7srodzsJ71j+iB7+UJhnrLPG+OzqiFIccFziZpV8Q3axpTq17maltVFrndvrioQ7ldNgYYQV1z8WQA9PBtvkF3X+GzuZdkFRm581ylgiarqcEqnNhymsrr0tOEJ8ik5AgaJyhZmZoXas7FWbWnrnHhw/NgO5A8GNaZg45Bb/1rIcnQq9m2V0hxi70wjVMCbprQOvCXrlVibM2KdLC69qpsvUzCp18SpBjqoAWTMLTeoGxZRxk4NEiwOEM8YKexKAbnbLAIFI6lLc9LUvOiioa8kjf1Go4lQpjv8ProzOnHObzO8lYEbSC4YyGBJysS8wZ9p0L7UbET5x5JqPWy1GbxmWEz74d+ZZG6F2LId7bUSxVuh0nZPCPkcUjoVfzPv2FnUEhFJMUBIlmNSeLYNTaBb7crd8lFeQ0/Q6cTasNhGc6/qIqFveFEAj8rosXyDi3xgKA=='
//     }
// } as S3ClientConfig
// const s3Client = new S3Client()
// const bucketName = 'my-insta-user'

// // Read the object.
// const { Body } = await s3Client.send(
//     new GetObjectCommand({
//         Bucket: bucketName,
//         Key: '386188735_692273322449351_333115167153959227_n.jpg',
//     })
// );

// // console.log(await Body.transformToString());
// const response = new NextResponse(await Body?.transformToByteArray())
// response.headers.set('content-type', 'image/jpg');
// return response;
// }
