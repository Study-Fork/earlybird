
# Integration with Facebook

## Facebook Graph API Explorer

 - https://developers.facebook.com/tools/explorer/145634995501895/?method=POST&path=688419537976752%2Ffeed&version=v2.8

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

