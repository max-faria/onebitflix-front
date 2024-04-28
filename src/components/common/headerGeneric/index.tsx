import Link from "next/link";
import styles from "./styles.module.scss";
import { Container, Button } from "reactstrap";

interface props {
    logoUrl: string,
    btnURL: string,
    btnContent: string,
}

const HeaderGeneric = ({logoUrl, btnURL, btnContent}: props) => {
  return (
    <>
      <div className={styles.header}>
        <Container className={styles.headerContainer}>
          <Link href={logoUrl}>
            <img src="/logoOnebitflix.svg" alt="logoRegister" className={styles.headerLogo} />
          </Link>
          <Link href={btnURL}>
          <Button outline color="light" className={styles.headerBtn}>{btnContent}</Button>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default HeaderGeneric;
