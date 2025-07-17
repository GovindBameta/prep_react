import React from "react";
import screenshot from "./assets/Screenshot(8).png";

const App = () => {
  const user = {
    name: "Headly Lamarr",
    imageUrl: screenshot,
    imageSize: 90,
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={user.imageUrl}
          alt={`Photo of ${user.name}`}
          style={{
            ...styles.avatar,
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
        <h1 style={styles.name}>{user.name}</h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s",
  },
  avatar: {
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
  },
  name: {
    marginTop: "1rem",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#333",
  },
};

export default App;
