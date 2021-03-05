import React, { useState } from "react";

const FromData = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const post = {
    title,
    body,
  };

  return (
    <div>
      <h3>Form data</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // addPost({ post });
          setTitle(" ");
          setBody(" ");
        }}
      >
        <div>
          <label>Title: </label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Body: </label>
          <br />
          <textarea
            name="body"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FromData;
