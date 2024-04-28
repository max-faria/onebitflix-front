import HeaderGeneric from "@/src/components/commom/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";

const Register = () => {
  return (
    <>
      <Head>
        <title>Onebitflix Register</title>
      </Head>
      <main>
        <HeaderGeneric btnContent="Fazer login" btnURL="/login" logoUrl="/"/>
      </main>
    </>
  );
};

export default Register