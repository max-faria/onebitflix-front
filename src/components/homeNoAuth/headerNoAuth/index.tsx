import { Container, Button } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const HeaderNoAuth = () => {
  return (
    <>
      <div className={styles.ctaSection}>
        <img
          src="/homeNoAuth/logoCta.png"
          alt="logoCta"
          className={styles.imgCta}
        />
        <p>Se cadastre para ter acesso aos cursos</p>
        <img
          src="/homenOAuth/logoCta.png"
          alt="logoCta"
          className={styles.imgCta}
        />
      </div>
      <Container className={styles.navBar}>
        <img
          src="/logoOnebitflix.svg"
          alt="Logo onebitflix"
          className={styles.imgLogoNav}
        />
        <div>
          <Link href="/login">
            <Button outline className={styles.navBtn}>
              Entrar
            </Button>
          </Link>
          <Link href="/register">
            <Button outline className={styles.navBtn}>
              Quero fazer parte
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default HeaderNoAuth;
