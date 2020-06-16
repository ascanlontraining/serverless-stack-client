export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
            REGION: "eu-west-2",
            BUCKET: "ajs-notes-app-uploads"
        },
    apiGateway: {
            REGION: "eu-west-2",
            URL: "https://6fui64y5q8.execute-api.eu-west-2.amazonaws.com/prod"
        },
    cognito: {
            REGION: "eu-west-2",
            USER_POOL_ID: "eu-west-2_VtBexg4gn",
            APP_CLIENT_ID: "7m8qoghqbdkjq5f0paoe7k68ur",
            IDENTITY_POOL_ID: "eu-west-2:aa4c2766-6503-49d1-b1d0-891c62c2d6ba"
            }
    };