import styles from "@/app/styles/card.module.scss";
const Card = ({ name, description }: any) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.header}>{name}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.footer}>
        <button className={styles.button}>Aceptar</button>
      </div>
    </div>
  );
};

export default Card;
