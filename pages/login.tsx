import Head from "next/head";
import HeaderGeneric from "../src/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import { Form, FormGroup, Label, Container, Button, Input } from "reactstrap";
import { useRouter } from "next/router";
import { FormEvent, use, useEffect, useState } from "react";
import authService from "@/src/services/authService";
import ToastComponent from "@/src/components/common/toast";

const Login = () => {
  const router = useRouter();
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if(sessionStorage.getItem("onebitflix-token")){
      router.push("/home")
    }
  },[])

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const params = { email, password };


    const { status } = await authService.login(params);

    if (status === 200) {
      router.push("/home");
    } else {
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage("Username or password incorrect!");
    }
  };

  return (
    <>
      <Head>
        <title>Onebitflix - Login</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderGeneric
          logoUrl="/"
          btnURL="/register"
          btnContent="Quero fazer parte"
        />

        <Container className="py-5">
          <p className={styles.formTitle}>Bem-vindo(a) ao OneBitFlix!</p>
          <Form className={styles.form} onSubmit={handleLogin}>
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
        <ToastComponent
        color="bg-danger"
        isOpen={toastIsOpen}
        message={toastMessage}
        />
      </main>
    </>
  );
};

export default Login;
