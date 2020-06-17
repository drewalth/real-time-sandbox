import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function Ticker() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    
    async function connect() {
      const socket = await socketIOClient(ENDPOINT);
      socket.on("FromAPI", (data: any) => {
        setResponse(data);
      });
      return () => socket.disconnect();
    }

    connect()
    
  },[]);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}

export default Ticker;