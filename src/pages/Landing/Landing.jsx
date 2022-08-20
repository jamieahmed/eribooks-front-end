import styles from "./Landing.module.css";

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ? (
        <section className={styles.mainpage}>
          <h1>You are login in {user ? user.name : "friend"}</h1>
        </section>
      ) : (
        <section>
          <h1>You are not login in my  {user ? user.name : "friend"}</h1>
        </section>
      )}
    </main>
  );
};

export default Landing;
