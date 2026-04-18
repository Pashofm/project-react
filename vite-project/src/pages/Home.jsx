import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Home</h1>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#121212",
    color: "#ffffff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
};

export default Home;
