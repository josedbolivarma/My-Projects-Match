import styles from './MatchDetail.module.css';
import { MdOutlineWork } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BsFillCalendar2WeekFill, BsInstagram } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { BlogCards } from '../../../components';
import { useParams } from 'react-router-dom';
import { initialData } from '../AppLading/AppLanding';

import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

import { Footer } from '../../../components';


export const MatchDetail = () => {

    const [data, setData] = useState([]);
    const { card } = useParams();

    useEffect(() => {
        const newData = initialData.filter((item) => item.id == card );
        window.scrollTo(0, 0);
        setData(newData[0]);
    }, [card]);
    

  return (
    <div className={ styles.section }>
        <header>
        <div className={ styles.media }>
            <img className={ styles.mainImg } src={ data.imgProject } alt="" />
            <img className={ styles.iconImg } src={ data.avatar } alt="" />
        </div>
    </header>
        <div className={ styles.boxProject }>
        <div className='container'>

            <div className={ styles.boxTitle }>
                <h2 className={ styles.mainTitle }>{ data.name }</h2>
                <label className={ styles.description } htmlFor="">{ data.overview }</label>    
            </div>
            <div className={`${styles.boxInfo}`}>
                <div className={ styles.boxInfoFirst }>
                <h4 className={ styles.rol }>Rol General</h4>
                <label className={ styles.rolDetail } htmlFor="">{ data.jobAspiration }</label>
                <h3 className={ styles.person }>Sancho Panza</h3>
                <label className={ styles.personDetail } htmlFor="">Gestor de proyectos</label>
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
                <label className={ styles.groupDescription } htmlFor="">Descripción del grupo</label>
                </div>
                <div className={ styles.boxInfoSecond }>
                    <div>
                        <h2>Likes</h2>
                        <p>24</p>
                    </div>

                    <div>
                        <h2>Followers</h2>
                        <p>12</p>
                    </div>

                    <div>
                        <h2>Projects</h2>
                        <p>4</p>
                    </div>

                </div>
            </div>

            
        </div>
        
        <div className={ styles.cardsBox }>
            <div className={`${styles.employee} ${styles.card}`}>
                <MdOutlineWork color={'#FFF'} size={ 40 } />
                <h4>3</h4>
                <label htmlFor="">Contributors</label>
            </div>

            <div className={`${styles.time} ${styles.card}`}>
                <AiOutlineFieldTime color={'#FFF'} size={ 40 } />
                <h4>9AM - 6PM</h4>
                <label htmlFor="">Work Training</label>
            </div>

            <div className={`${styles.calendar} ${styles.card}`}>
                <BsFillCalendar2WeekFill color={'#FFF'} size={ 40 } />
                <h4>5 days</h4>
                <label htmlFor="">Working days</label>
            </div>

        </div>

        </div>

        <div className='text-center w-[100%] flex justify-center flex-col items-center gap-8'>
            <h2>Contact</h2>
            <div className='flex gap-4 justify-center container w-[30%]'>
                <BsFacebook size={ 40 } />
                <BsGithub size={ 40 } />
                <BsLinkedin size={ 40 } />
                <BsInstagram size={ 40 } />
            </div>
        </div>

        <BlogCards />
        <Footer />

    </div>
  )
}
