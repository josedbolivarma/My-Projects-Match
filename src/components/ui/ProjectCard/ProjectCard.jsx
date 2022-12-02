import styles from "./ProjectCard.module.css";
import { FaHeart } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { Link } from "react-router-dom";

export const ProjectCard = ({ person, swipe, canSwipe, goBack, canGoBack }) => {
  return (
    <div
      className={ styles.card }
    >
        <Link to={`/match/${ person.id }`}>
        <div className={ styles.cardBanner }
            style={{ backgroundImage: `url(${person.imgProject})` }}
        >
            <img className={ styles.logoProfile } src={ person.avatar } />
            <div className={ styles.cardBannerContent }>
                <h2>{ person.name }</h2>
            </div>
            <div className={ styles.cardBannerContentTop }>
                <h2>{ person.username }</h2>
            </div>
        </div>
        </Link>
        <div className={ styles.contentDescription }>
            <h3>{ person.name }</h3>
            <p>{ person.description }</p>
        </div>

        <div className={ styles.cardLegend }>
            <div className={ styles.box }>
            <h3>JOB ASPIRATION</h3>
            <h2>{ person.jobAspiration }</h2>
            </div>

            <div className={ styles.box }>
            <h3>TECNOLOGIES</h3>
            <div className={ styles.boxFlex }>
                {
                    person.technologies.map(tech => (
                        <h4 key={ tech.name }>{ tech.name }</h4>
                    ))
                }
            </div>
            
            </div>
        </div>


        <div className={ styles.buttons }>
        <FaHeart color='red' size={ 40 }/>

        <GrLinkPrevious size={ 40 } color={ !canSwipe && '#c3c4d3' } onClick={() => swipe('left')} />
        <TfiReload size={ 40 } color={ !canGoBack && '#c3c4d3' } onClick={() => goBack()} />
        <GrLinkNext size={ 40 } color={ !canSwipe && '#c3c4d3' } onClick={() => swipe('right')} />
      </div>
    </div>  
  );
};
