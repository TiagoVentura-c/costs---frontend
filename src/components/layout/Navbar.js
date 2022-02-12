import { Link } from "react-router-dom";
import Container from "./Container";
import {logout} from '../Api/auth'

import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";
import SubmitButton from "../form/SubmitButton";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetch } from "../Api/api";

function Navbar() {

  const history = useHistory();

  const handleonClick = () => {
    logout()
    history.push('/login');
  }

  const[name, setName] = useState('')

  useEffect(() => {
    fetch('user')
    .then(response => setName(response.data))
  }, [])

  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
        <h4 className={styles.item}>{name}</h4>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <SubmitButton text={"SAIR"} handleOnClick={handleonClick} />
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
