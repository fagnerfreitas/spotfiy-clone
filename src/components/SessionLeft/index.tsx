import Button from '../Button';
import styles from './session.module.scss';

export default function SessionLeft(){
    
    return(
        <div className={styles.sessionLeft}>
          <div className={styles.card}>
            <ul>
              <li>
                <a href="">
                  <span className="material-symbols-rounded">home</span>
                  <strong>Inicio</strong>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="material-symbols-rounded">search</span>
                  <strong>Busca</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.scroll}>
            <header className={styles.header}>
              <div className={styles.title}>
                <span className="material-symbols-rounded">library_music</span>
                <strong>Sua Biblioteca</strong>
              </div>
              <span className="material-symbols-rounded">add</span>
            </header>

            <div className={styles.cardScroll}>
              <div className={styles.paddingCard}>
                <strong>Crie sua primeira playslist</strong>
                <span>É fácil, vamos te ajudar</span>
                <Button text="Criar Playlist" />
              </div>
            </div>
            <div className={styles.cardScroll}>
              <div className={styles.paddingCard}>
                <strong>Que tal seguir um podcast novo ?</strong>
                <span>Avisaremos você sobre novos eísódios</span>
                <Button text="Explore poscasts" />
              </div>
            </div>
          </div>

          <div className={styles.footerSessionLeft}>
            <a href="#">
              Cookies
            </a>
            <button className={styles.btnLenguage}>
              <span className="material-symbols-rounded">language</span>
              <strong>Português do Brasil</strong>
            </button>
          </div>
        </div>
    )
}