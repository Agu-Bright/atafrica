import React, { useState } from "react";
import { ChatFeed, Message } from "react-chat-ui";

const HorizontalChat = () => {
  const [messages, setMessages] = useState([
    new Message({ id: 1, message: "US-stock: 40%" }),
    new Message({ id: 2, message: "Foreign Stock: 10%" }),
    new Message({ id: 3, message: "Emerging Market: 20%" }),
  ]);

  return (
    <div>
      <ChatFeed
        messages={messages}
        hasInputField={false}
        bubbleStyles={{ text: { fontSize: 16 } }}
      />
    </div>
  );
};

export default HorizontalChat;
