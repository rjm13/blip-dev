export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "blipdev0e2b1f16": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "BasicGroupRole": "string",
            "AdminGroupRole": "string",
            "PremiumGroupRole": "string",
            "TrialGroupRole": "string",
            "StudentGroupRole": "string"
        }
    },
    "api": {
        "blipdev": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "s3671a5d42": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "AdminQueries50014f69": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}