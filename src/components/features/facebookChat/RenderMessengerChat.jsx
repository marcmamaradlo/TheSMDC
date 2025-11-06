import React from "react";
import {
  MessengerChat,
  showMessenger,
  hideMessenger,
  showDialog,
  hideDialog,
  setMessengerBottomSpacing,
} from "react-messenger-chat-plugin";

const RenderMessengerChat = () => {
  return (
    <div className="App">
      <div className="messenger-controls" style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => showMessenger(true)}
          style={{ marginRight: "0.5rem" }}
        >
          Show Messenger
        </button>
        <button
          onClick={() => hideMessenger()}
          style={{ marginRight: "0.5rem" }}
        >
          Hide Messenger
        </button>
        <button onClick={() => showDialog()} style={{ marginRight: "0.5rem" }}>
          Show Dialog
        </button>
        <button onClick={() => hideDialog()} style={{ marginRight: "0.5rem" }}>
          Hide Dialog
        </button>
        <button
          onClick={() => setMessengerBottomSpacing(100)}
          style={{ marginRight: "0.5rem" }}
        >
          Adjust Height
        </button>
      </div>

      <MessengerChat
        pageId="369871809797339"
        themeColor="#0084FF"
        loggedInGreeting="Welcome to SMDC! How can we assist you today?"
        loggedOutGreeting="Hi! Please log in to chat with our team."
        shouldShowDialog={false}
        htmlRef="messenger-root"
        language="en_US.UTF-8"
        bottomSpacing={300}
        greetingDialogDisplay={"show"}
        debugMode={true}
        onMessengerShow={() => {
          console.log("onMessengerShow");
        }}
        onMessengerHide={() => {
          console.log("onMessengerHide");
        }}
        onMessengerDialogShow={() => {
          console.log("onMessengerDialogShow");
        }}
        onMessengerDialogHide={() => {
          console.log("onMessengerDialogHide");
        }}
        onMessengerMounted={() => {
          console.log("onMessengerMounted");
        }}
        onMessengerLoad={() => {
          console.log("onMessengerLoad");
        }}
      />
    </div>
  );
};

export default RenderMessengerChat;
