import React, { useEffect } from "react";
import { socket } from "../../socket";
import { LoginForm } from "../../features/login-form/login-form";
import { useDispatch, useSelector } from "react-redux";
import { setIsConnected, userSelector } from "../../slices/user-slice";
import { MessageField } from "../../features/message-field/message-field";

import styles from "./app.module.css";

export const App = () => {
  const dispatch = useDispatch();
  const { loggedIn: isLoggedIn, connected: isConnected } =
    useSelector(userSelector);

  function onConnect() {
    dispatch(setIsConnected(true));
  }

  function onDisconnect() {
    dispatch(setIsConnected(false));
  }

  useEffect(() => {
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", (msg) => {
      try {
        console.log("msg :>> ", msg);
      } catch (error) {
        console.log("error :>> ", error);
      }
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message");
    };
  }, [socket]);

  return (
    <section className={styles.container}>
      {isLoggedIn ? (
        <React.Fragment>
          <MessageField />
        </React.Fragment>
      ) : (
        <LoginForm />
      )}
    </section>
  );
};
