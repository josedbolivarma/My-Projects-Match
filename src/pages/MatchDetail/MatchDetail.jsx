import styles from './MatchDetail.module.css';
import { MdOutlineWork } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const MatchDetail = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
     axios.get('https://localhost:3001/data')
    }, []);
    

  return (
    <div className={ styles.section }>
        <header>
        <div className={ styles.media }>
            <img className={ styles.mainImg } src="https://ipse.gov.co/wp-content/uploads/2020/06/PROYECTOS.png" alt="" />
            <img className={ styles.iconImg } src="https://upload.wikimedia.org/wikipedia/commons/5/54/Google_Now_logo.webp" alt="" />
        </div>
    </header>
        <div className={ styles.boxProject }>
        <div className='container'>

            <div className={ styles.boxTitle }>
                <h2 className={ styles.mainTitle }>Titulo del proyecto</h2>
                <label className={ styles.description } for="">Descripción del proyecto que incluya un resumen un objetivo, a quién va dirigido y la funcionalidad. </label>    
            </div>
            <div className={ styles.boxInfo }>
                <h4 className={ styles.rol }>Rol Grupal</h4>
                <label className={ styles.rolDetail } for="">Coordinador del proyecto</label>
                <h3 className={ styles.person }>Sancho Panza</h3>
                <label className={ styles.personDetail } for="">Gestor de proyectos</label>
                <h4 className={ styles.languages }>Tecnologias Utilizadas</h4>
                <ul className={ styles.languagesIcons }>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                    </li>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="" />
                    </li>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" alt="" />
                    </li>
                </ul>
                <h4 className={ styles.groupName }>Nombre del grupo de trabajo</h4>
                <label className={ styles.groupDescription } for="">Descripción del grupo</label>
            </div>
        </div>
        
        <div className={ styles.cardsBox }>
            <div className={`${styles.employee} ${styles.card}`}>
                <MdOutlineWork color={'#FFF'} size={ 40 } />
                <h4>3.5k</h4>
                <label for="">Employees</label>
            </div>

            <div className={`${styles.time} ${styles.card}`}>
                <AiOutlineFieldTime color={'#FFF'} size={ 40 } />
                <h4>9AM - 6PM</h4>
                <label for="">Work Training</label>
            </div>

            <div className={`${styles.calendar} ${styles.card}`}>
                <BsFillCalendar2WeekFill color={'#FFF'} size={ 40 } />
                <h4>5 days</h4>
                <label for="">Working days</label>
            </div>

        </div>
        </div>

    </div>
  )
}
