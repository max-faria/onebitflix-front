import HeaderGeneric from "@/src/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { Form, FormGroup, Label, Container, Button, Input } from "reactstrap";
import { FormEvent, useState } from "react";
import authService from "@/src/services/authService";
import { useRouter } from "next/router";
import ToastComponent from "@/src/components/common/toast";

const Register = () => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const router = useRouter();

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName")!.toString();
    const lastName = formData.get("lastName")!.toString();
    const phone = formData.get("phone")!.toString();
    const birth = formData.get("birth")!.toString();
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const confirmPassword = formData.get("confirmPassword")!.toString();

    const params = { firstName, lastName, phone, birth, email, password };

    if (password != confirmPassword) {
      // alert("The passwords must be the same!");
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage("The passwords must be the same!");

      return;
    }

    const { data, status } = await authService.register(params);

    if (status === 201) {
      router.push("/login?registered=true");
    } else {
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage(data.message);
    }
  };

  return (
    <>
      <Head>
        <title>Onebitflix Register</title>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://jsuites.net/v4/jsuites.js"></script>
      </Head>
      <main className={styles.main}>
        <HeaderGeneric btnContent="Fazer login" btnURL="/login" logoUrl="/" />

        <Container className="py-5">
          <p className={styles.formTitle}>
            <strong>Welcome to Onebitflix</strong>
          </p>
          <Form className={styles.form} onSubmit={handleRegister}>
            <p className="text-center">
              <strong>Faça a sua conta</strong>
            </p>
            <FormGroup>
              <Label for="firstName" className={styles.label}>
                Nome
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Seu nome aqui"
                required
                max-length={20}
                className={styles.inputName}
              />
            </FormGroup>

            <FormGroup>
              <Label for="lastName" className={styles.label}>
                Sobrenome
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Seu sobrenome aqui"
                required
                max-length={20}
                className={styles.inputName}
              />
            </FormGroup>

            <FormGroup>
              <Label for="phone" className={styles.label}>
                Whatapp
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                data-mask="[ - ] +55 (00) 00000-0000"
                placeholder="(xx) 9xxxx-xxxx"
                required
                className={styles.input}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email" className={styles.label}>
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="tel"
                placeholder="Seu email"
                required
                className={styles.input}
              />
            </FormGroup>

            <FormGroup>
              <Label for="birth" className={styles.label}>
                Nascimento
              </Label>
              <Input
                id="birth"
                name="birth"
                type="date"
                placeholder=""
                min="1930-01-01"
                max="2024-12-12"
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
                placeholder="Digite a sua senha"
                minLength={6}
                maxLength={20}
                required
                className={styles.input}
              />
            </FormGroup>

            <FormGroup>
              <Label for="confirmPassword" className={styles.label}>
                Confirme sua senha
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirme sua senha"
                minLength={6}
                maxLength={20}
                required
                className={styles.input}
              />
            </FormGroup>

            <Button type="submit" outline className={styles.formBtn}>
              CADASTRAR
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

export default Register;
