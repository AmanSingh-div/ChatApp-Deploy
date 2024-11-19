import React, { useEffect, useRef } from "react";
import Message from "./Message";
import UseGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";
import useGetSocketMessage from "../../context/useGetSocketMessage.js";

function Messages() {
  const { loading, messages } = UseGetMessage();
  useGetSocketMessage()
  const lastMsgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);

  return (
    <div
      className="flex-1 overflow-y-auto px-4 py-4 rounded-lg shadow-inner"
      style={{
        backgroundImage: `url('back.jpg')`, // Update with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "calc(90vh - 10vh)",
        maxHeight: "calc(90vh - 10vh)",
      }}
    >
      {/* Loading State */}
      {loading && <Loading />}

 {/* Messages */}
 {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div key={message._id || index} className="mb-4">
            <Message message={message} />
          </div>
        ))}

      {/* No Messages Placeholder */}
      {!loading && messages.length === 0 && (
        <div className="text-center mt-[20%]">
          <p className="text-white font-medium text-lg animate-pulse shadow-black">
            Don't be shy! Start a conversation now. 😊
          </p>
        </div>
      )}

      {/* Scroll Anchor */}
      <div ref={lastMsgRef}></div>
    </div>
  );
}

export default Messages;