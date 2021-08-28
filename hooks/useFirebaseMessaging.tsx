import { useEffect } from "react";
import firebase from "firebase/app";
import 'firebase/messaging';

import { firebaseCloudMessaging } from "../webPush";

const useFirebaseMessaging = () => {
  useEffect(() => {
    const setToken = async () => {
      try {
        const token: string = await firebaseCloudMessaging.init() || "";
        if (token) {
          getMessage(token);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getMessage = (token: string) => {
      // console.log('Token: ', token)
      const messaging = firebase.messaging();
      messaging.onMessage((message) => console.log("foreground", message));
    };

    setToken();
  }, []);
};

export default useFirebaseMessaging;
