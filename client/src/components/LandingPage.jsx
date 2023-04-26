import React from "react";
import { Link } from 'react-router-dom'
import s from '../style/LandingPage.module.css'
import linkedin from '../imagenes/linkedin (1).png'
import github from '../imagenes/github (1).png'
import gmail from '../imagenes/gmail (1).png'

const LandingPage = () => {
    return (
        <div className={s.full}>
            <div className={s.full_inner}>
                <div className={s.content}>
                    <h1 className={s.titulo}>Videogames</h1>
                    <Link to='/home'>
                        <button className={s.btn}>
                            <span className={s.ingresar}>To play...</span>
                        </button>
                    </Link>
                </div>


                <nav className={s.nav}>
                <div className={s.links}>
                    <div className={s.mini_box}>
                        <a href='https://www.linkedin.com/in/nahir-maresca-63b028251/' target="_blank" rel="noreferrer">
                            <img src={linkedin} alt='linkedin' />
                        </a>
                    </div>
                    <div className={s.mini_box}>
                        <a href='https://github.com/MNahir' target="_blank" rel="noreferrer">
                            <img src={github} alt='github' />
                        </a>
                    </div>
                    <div className={s.mini_box}>
                        <a href='mailto:marescanahir18@gmail.com' target="_blank" rel="noreferrer">
                            <img src={gmail} alt='gmail' />
                        </a>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    )

}

export default LandingPage;