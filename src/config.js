const dev = {
  STRIPE_KEY: "pk_test_51GqyuADaaBQ1LA5TrwcR1fYAIOG5OVl0Q5PlhJD4Ah8jcveWZFskKKiw2dWnotQbIdwHMrASTkKeVeXb0tJcVx5H00vMnFngAL",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-oiyhmll6oo71"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://5el7toxhvg.execute-api.eu-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_5dgb4yZhj",
    APP_CLIENT_ID: "7nuhv8arvltjl0mamgon6h22pt",
    IDENTITY_POOL_ID: "eu-west-2:2291c115-ac38-4642-9322-0257ba3d600d"
  }
};

const prod = {
  STRIPE_KEY: pk_test_51GqyuADaaBQ1LA5TrwcR1fYAIOG5OVl0Q5PlhJD4Ah8jcveWZFskKKiw2dWnotQbIdwHMrASTkKeVeXb0tJcVx5H00vMnFngAL,
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1dduge969nrb0"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://5el7toxhvg.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_ms1PTVBqB",
    APP_CLIENT_ID: "1ivneign704h6qkbt2741i3p2e",
    IDENTITY_POOL_ID: "eu-west-2:8659574f-f51c-44ed-9e4b-768fef79a815"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

