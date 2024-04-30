import { Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import Modal from "react-modal";
import { useState } from "react";
import { useRouter } from "next/router";

Modal.setAppElement("#__next");

const HeaderAuth = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter()

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleLogOut = () => {
    sessionStorage.clear()
    router.push("/")
  }

  return (
    <>
      <Container className={styles.nav}>
        <Link href="/home">
          <img src="/logoOnebitflix.svg" alt="" className={styles.imgLogoNav} />
        </Link>
        <div className="d-flex align-items-center">
          <Form>
            <Input
              name="seacrh"
              type="search"
              placeholder="Search"
              className={styles.inout}
            />
          </Form>
          <img
            src="/homeAuth/iconSearch.svg"
            alt=""
            className={styles.searchImg}
          />
          <p className={styles.userProfile} onClick={handleOpenModal}>
            AB
          </p>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleOpenModal}
          shouldCloseOnEsc={true}
          className={styles.modal}
          overlayClassName={styles.overlayModal}
        >

            <Link href="/profile" className={styles.modalLink}>
                Meus dados
            </Link>
            <p className={styles.modalLink} onClick={handleLogOut}>Sair</p>
        </Modal>
      </Container>
    </>
  );
};

export default HeaderAuth;
