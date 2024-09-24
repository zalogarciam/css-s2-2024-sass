import styles from "@/app/styles/card.module.scss";
const Card = ({ name, description }: any) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.header}>{name}</div>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imper Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imper Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero.
      </div>
      <div className={styles.footer}>
        <button className={styles.button}>See more ...</button>
      </div>
    </div>
  );
};

export default Card;
