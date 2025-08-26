import React, { useState, useEffect } from "react";

function HelloFastApi() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);
  return <h1>{message}</h1>;
}
export default HelloFastApi;
