import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/src/components/profile/user";
import { Button, Col, Container, Row } from "reactstrap";
import HeaderAuth from "@/src/components/common/headerAuth";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Onebitflix - Meus Dados</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div className={styles.header}>
          <HeaderAuth />
        </div>
        <Container calssName="py-5">
          <p className={styles.title}>Minha Conta</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>
              <Button outline className={styles.renderFormBtn}>
                DADOS PESSOAIS
              </Button>
              <Button outline className={styles.renderFormBtn}>
                SENHA
              </Button>
            </Col>
            <Col md>
              <UserForm />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Profile;
