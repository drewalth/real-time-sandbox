import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import TickerModel from '../../Models/ticker.model';
import TickerInterface from "../../Interfaces/ticker.interfaces"
const ENDPOINT = "http://127.0.0.1:4001";

function Ticker() {
  const [response, setResponse] = useState<TickerInterface>(TickerModel);

  useEffect(() => {

    async function connect() {
      const socket = await socketIOClient(ENDPOINT);
      socket.on("connected", () => {
        alert('connected')
      })
      socket.on("FromAPI", (data: any) => {
        setResponse(data);
      });
      return () => socket.disconnect();
    }

    connect()

  }, []);

  return (
    <div className="ticker-wrapper">
      <h1>Current Time:</h1>
      <time dateTime={response.time}>{response.time}</time>
      <hr />
      <h1>Connection Time:</h1>
      <div>{response.loops}</div>
    </div>
  );
}

export default Ticker;