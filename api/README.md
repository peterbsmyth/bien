# API

### Deployment
```sh
now
```

### Usage
```
/api/poem?to=<PHONE_NUMBER>
```

### .env
```sh
KEY=<NEXMO_KEY>
SECRET=<NEXMO_SECRET>
ID=<NEXMO_APPLICATION_ID>
PHONE_NUMBER=<NEXMO_SENDER_PHONE_NUMBER> # Example: PHONE_NUMBER=12125550000
```

### Reference
[Nexmo Delivery Receipts](https://developer.nexmo.com/messaging/sms/guides/delivery-receipts)
[Nexmo Incoming SMS](https://developer.nexmo.com/messaging/sms/code-snippets/receiving-an-sms)