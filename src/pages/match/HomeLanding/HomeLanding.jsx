import { Header } from '../../../components';
import styles from './HomeLanding.module.css';

export const HomeLanding = () => {
  return (
    <div>
      <Header />
        <div className={ styles.home__container }>
        <div className={ styles.home__content }>
          <p className={ styles.home__titlePrincipal }>
            INNOVANDO LO CONVENCIONAL
          </p>
          <div className={ styles.text__container }>
            <p className={ styles.home__text }>
                <b>No</b> somos el <b>tipico</b> portal de busqueda de empleo, es un amigo en busca de la <b>excelencia</b>.
            </p>

            <p className={ styles.home__text }>
                <b>Your Project Match</b> esta dirigido para <b>reclutadores</b> y <b>desarrolladores</b>, una plataforma que busca crear <b>conexiones</b> a traves de <b>proyectos</b>.
            </p>
          </div>
        </div>
        <div className={ styles.home__images }>
          <img
            className={ styles.home__imageOne }
            src="https://img.freepik.com/psd-premium/mujer-laptop_23-2148561488.jpg?w=2000"
            alt="home one"
          />
          <img
            className={ styles.home__imageTwo }
            src="https://img.freepik.com/fotos-premium/hombre-sonriente-mirando-telefono-sobre-fondo-amarillo_295303-3723.jpg?w=2000"
            alt="home two"
          />
        </div>
      </div>
    </div>
  )
}
