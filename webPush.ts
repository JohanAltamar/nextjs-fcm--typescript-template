import localforage from "localforage";
import firebase from "firebase/app";
import "firebase/messaging";

const firebaseCloudMessaging = {
  //initializing firebase app
  init: async (): Promise<string | null> => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "****************************",
        authDomain: "****************************",
        projectId: "****************************",
        storageBucket: "****************************",
        messagingSenderId: "****************************",
        appId: "****************************",
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage: string | null = await localforage.getItem(
          "fcm_token"
        );

        //if FCM token is already there just return the token
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        //requesting notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          //getting token from FCM
          const fcm_token: string = await messaging.getToken({
            vapidKey:
              "BLFz-tpXgvyuGVKqIt01WsvIVnvIZBD56_eDzJyHf9-REFXlWUoFHEwhGL6gBrVaOU6OTBY3R7bB9AoaQ7AvZ_U",
          });

          if (fcm_token) {
            //setting FCM token in indexed db using localforage
            localforage.setItem("fcm_token", fcm_token);
            console.log("fcm token", fcm_token);
            //return the FCM token after saving it
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    return null;
  },
};

export { firebaseCloudMessaging };
