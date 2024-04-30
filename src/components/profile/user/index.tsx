import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";
import { FormEvent, useEffect, useState } from "react";
import profileService from "@/src/services/profileService";
import ToastComponent from "../../common/toast";

const UserForm = () => {
  const [color, setColor] = useState('')
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birth, setBirth] = useState('')
  const [phone, setPhone ] = useState('')
  const [email, setEmail] = useState('')
  const [created_at, setCreated_at] = useState('')

  const date = new Date(created_at);
  const month = date.toLocaleDateString("default", { month: "long" });


  useEffect(() => {
    profileService.fetchCurrent().then((user) => {
      setFirstName(user.firstName);
      setLastName(user.lastName)
      setBirth(user.birth)
      setPhone(user.phone)
      setEmail(user.email)
      setCreated_at(user.createdAt)
    })
  },[])

  const handleUserUpdate = async function (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const res = await profileService.userUpdate({
      firstName,
      lastName,
      phone,
      email,
      created_at
    })

    if(res === 200){
      setToastIsOpen(true)
      setErrorMessage("Informações alteradas com sucesso")
      setColor('bg-success')
      setTimeout(() => {
        setToastIsOpen(false)
      }, 3*1000);
    } else {
      setToastIsOpen(true)
      setErrorMessage("Email inválido")
      setColor('bg-danger')
      setTimeout(() => {
        setToastIsOpen(false)
      }, 3*1000);
    }


  }

  return (
    <>
      <Form onSubmit={handleUserUpdate}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>
            {firstName.slice(0,1)}{lastName.slice(0,1)}
          </p>
          <p className={styles.userName}>{firstName} {lastName}</p>
        </div>
        <div className={styles.memberTime}>
          <img
            src="/profile/iconUserAccount.svg"
            alt="iconProfile"
            className={styles.memberTimeImg}
          />
          <p className={styles.memberTimeText}>
            Membro desde <br />  {`${date.getDate()} de ${month} de ${date.getFullYear()}`}
          </p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label} for="firstName">
              Nome
            </Label>
            <Input
              name="firstName"
              type="text"
              id="firstName"
              placeholder="Qual o seu primeiro nome?"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={firstName}
              onChange={(ev) => setFirstName(ev.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for="lastName">
              Sobrenome
            </Label>
            <Input
              name="lastName"
              type="text"
              id="lastName"
              placeholder="Qual o seu último nome?"
              required
              maxLength={20}
              className={styles.inputFlex}
              value={lastName}
              onChange={(ev) => setLastName(ev.target.value)}
            />
          </FormGroup>
        </div>
        <div className={styles.inputNormalDiv}>
          <FormGroup>
            <Label className={styles.label} for="phone">
              Phone
            </Label>
            <Input
              name="phone"
              type="tel"
              id="phone"
              placeholder="(xx) 9xxxx-xxxx"
              required
              className={styles.input}
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for="email">
              Email
            </Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Coloque o seu email"
              required
              className={styles.input}
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </FormGroup>

          <Button className={styles.formBtn} outline>
            Salvar Alterações
          </Button>
        </div>
      </Form>
      <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage}/>
    </>
  );
};

export default UserForm;
