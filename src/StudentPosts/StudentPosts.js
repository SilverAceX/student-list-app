import React, { useState, useEffect } from "react";
export const StudentPosts = ({isAdmin}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.log(error));
    return () => {
      "Cleanup codes";
    };
  }, []);

  if (!isAdmin) {
    return null;
  }
  return (
    <>
      <h2>What students are thinking</h2>
      <table>
        <thead>
          <tr>
            <th>Titles</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.slice(0, 10).map(({ index, title, body }) => (
            <tr key={index}>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
