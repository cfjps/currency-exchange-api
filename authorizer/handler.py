import os

def authorizer(event, context):
    
    auth = 'Deny'
    if event['authorizationToken'] == os.environ['Token']:
        auth = 'Allow'
    else:
        auth = 'Deny'
    
    auth_response = { "principalId": "1", "policyDocument": { "Version": "2012-10-17", "Statement": [{"Action": "execute-api:Invoke", "Resource": ["arn:aws:execute-api:eu-central-1:611736498236:b42881wa93/*/*", "arn:aws:execute-api:eu-west-1:611736498236:0zyp1degol/*/*"], "Effect": auth}] }}
    return auth_response

    