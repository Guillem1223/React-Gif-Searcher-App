import React from "react";

export const GifGrid = ({ category }) => {
  const gif = [1, 2, 3, 4, 5];

  return (
    <>
      <h3>{category}</h3>
      {gif.map((gif) => (
        <p>{gif}</p>
      ))}
    </>
  );
};
