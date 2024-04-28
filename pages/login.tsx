import Head from "next/head";
import HeaderGeneric from "../src/components/commom/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import { Form, FormGroup, Label, Container, Button, Input } from "reactstrap";


const Login = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - Login</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderGeneric logoUrl="/" btnURL="/register" btnContent="Quero fazer parte" />

        <Container className="py-5">
	<p className={styles.formTitle}>Bem-vindo(a) ao OneBitFlix!</p>
	<Form className={styles.form}>
	  <p className="text-center">
	    <strong>Bem-vindo(a) ao OneBitFlix!</strong>
    </p>
    <FormGroup>
	    <Label for="email" className={styles.label}>
	      E-mail
      </Label>
      <Input
	      id="email"
        name="email"
        type="email"
        placeholder="Seu email aqui"
        required
        className={styles.input}
      />
    </FormGroup>
    <FormGroup>
	    <Label for="password" className={styles.label}>
	      Senha
      </Label>
      <Input
	      id="password"
        name="password"
        type="password"
        placeholder="Sua senha aqui"
        required
        className={styles.input}
      />
    </FormGroup>
	  <Button outline className={styles.formBtn}>
	    Entrar
    </Button>
	</Form>
</Container>
      </main>
    </>
  );
};

export default Login;