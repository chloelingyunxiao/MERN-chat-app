import React from "react";
import { ChatState } from "../Context/ChatProvider";

const SingleChats = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat, setSelectedChat, user, notification, setNotification } =
    ChatState();
  return <div>Single chat</div>;
};

export default SingleChats;
