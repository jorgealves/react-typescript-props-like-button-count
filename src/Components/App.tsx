import React, { useState } from "react";
import { Heart } from "styled-icons/fluentui-system-filled";
import styles from  '../Styles/App.module.css'


const App = () => {
  const [likes, setLike] = useState(0);

  const likeClick = () => {
    setLike(() => {
      return likes + 1;
    });
  };

  return (
    <>
      <Heart className={styles.heartIcon} onClick={likeClick} />
      <p>{likes}</p>
    </>
  );
};

export default App;
