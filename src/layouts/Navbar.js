import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../img/costs_logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.logo}>
                    <Link to="/"><img src={logo} alt='Costs'/></Link>
                </div>
                <div className={styles.menuToggle} onClick={toggleMenu}>
                    <FaBars />
                </div>
                <ul className={`${styles.list} ${isOpen ? styles.showMenu : ''}`}>
                    <li className={styles.item}>
                        <Link to="/" exact>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects" exact>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;
    