import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>___SP___</div>
      <div className={styles.text}>
        Sudhanshu Pandey © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
