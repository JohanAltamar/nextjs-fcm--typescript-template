This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Browse to http://localhost:3000

## Firebase Cloud Messaging
- Create a new project in firebase console.
- Create a web project.
- Copy the settings object into `webPush.ts` and `firebase-messaging-sw.js` files.
- Inside settings of the firebase project, in Cloud Messaging tab, generate a server key.
- To test FCM, open **Postman** and `Postman > import > Paste Raw Text`:
```
curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
--header 'Content-Type: application/json' \
--header 'Authorization: key={{FCM server token}}' \
--header 'Content-Type: text/plain' \
--data-raw '
{
    "to" : "{{FCM token}}", 
   "data": {
        "notification": {
        "title": "Hello",
        "body": "world"
    }  
}'
```
- Replace **{{FCM server token}}** with the server key from the last step and **{{FCM token}}** from the Browser Console.
![image1](https://user-images.githubusercontent.com/52516932/131231503-b8889de5-6b52-40fa-8ed7-28f0f242590b.png)
![image2](https://user-images.githubusercontent.com/52516932/131231506-2e0db43d-17db-40cb-ab1d-6822f7202245.png)
- Restart the server.
