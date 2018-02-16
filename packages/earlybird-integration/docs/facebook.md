
# Integration with Facebook

## Facebook Graph API Explorer

 - https://developers.facebook.com/tools/explorer/145634995501895/?method=POST&path=688419537976752%2Ffeed&version=v2.8

## Authorizations and Login response

```
publish_actions, user_posts, user_managed_groups
```

```
{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}
```

- connected - 사용자가 Facebook에 로그인하고 앱에 로그인했습니다.
- not_authorized - 사용자가 Facebook에는 로그인했지만 앱에는 로그인하지 않았습니다.
- unknown - 사용자가 Facebook에 로그인하지 않았으므로 사용자가 앱에 로그인했거나 FB.logout()이 호출되었는지 알 수 없어, Facebook에 연결할 수 없습니다.

`Response`

```javascript
{
    "appId": "736580453211456",
    "fields": "name,email,picture",
    "scope": "email,public_profile,publish_actions",
    "autoLoad": true,
    "userID": "1727088583997477",
    "accessToken": "EAAKd6oBDHUABAFJRRF5sn0Cro86h5mKFZCor2eqoFvTIIkjNZAFUMhy16foU7ApDV6jD29NIociuo6MQAi7BkMCvEw0UaY2MygP4QDQgmrkTE6Wj7vs6ZCfEpCSxWwDgYiqlPHj7K8jZAzQipvx3BVCKblnKCndx4tZAnw7FM0cFzOEQWxP8XuDvgEZBVXAlmxvZApRejoM9AZDZD",
    "name": "정민혁",
    "picture": {
        "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/26168420_1678169585556044_6141666601844923678_n.jpg?oh=3679aaf55b5cfb07687f366dc6a5e1f6&oe=5B0B4EC1",
            "width": 50
        }
    },
    "id": "1727088583997477",
    "expiresIn": 5480,
    "signedRequest": "rCvY0vUXt0dQW5Sr6525bXvluDapsvXV6C13fa9AW1Y.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUJ0U1A5THJ3RE1Ec2lkMGhEdF9neXc4U2dpa3A1d0ZuTHJ4VGh3Tml6Nm5FOUprX2J4REVCcjhMbXVmYmtfY1R5Skc1ZjV5VVRWWHdIVXpBdTA2YXRJekw2Zl9JbV9zc3F4TE5ibjd3UVhSNXoxc3JWN1BuV2s0d0tHWTdJcE5ZcmsxYTgtbzgtMUZqYy12dUtNOWVxU0FDYU5ycUhtX3Z5MERyajNBT3hBZ19TakR1S1U2ZHUtQmdhOWZPS256dEQzczFIYm5zcHhFeXM4LUJseWp4T1pKb0xzcGZQeFBNVHh2TmUtWFU1WTMtRlQ4MGNseXVrbExXczd3dWxUZFYtMXA0RzBHT3BRcVZ2VDAxWU9BY1l6ZUZqdm5VNy1xdGg2VUdlcUxmc3FobVl4aW1DbmJoa20xRUtLZXN5ZFl4R2NYa01WOUJrQ3RYLTI0eE9mU095NCIsImlzc3VlZF9hdCI6MTUxODc4NzcyMCwidXNlcl9pZCI6IjE3MjcwODg1ODM5OTc0NzcifQ"
}
```

## Get Group Id

Group Id | Description
---|---
688419537976752 | earlybird
652912804915355 | holaxprogramming
381481332245943 | remote work

> https://lookup-id.com/#

## REST APIs 

### Publish Feed

```
POST https://graph.facebook.com/v2.8/:group_id/feed
```

#### Parameters

Parameter | Description
---|---
accessToken | accessToken
message | message

<br/>

### Get Feeds

```
GET https://graph.facebook.com/v2.8/:group_id/feed
```

#### Parameters

Parameter | Description
---|---
accessToken | accessToken
fields | comments{comments{message},message},message

<br/>

### Publish Comment

```
POST https://graph.facebook.com/v2.8/:object_id/comments
```

#### Parameters

Parameter | Description
---|---
accessToken | accessToken
message | message

