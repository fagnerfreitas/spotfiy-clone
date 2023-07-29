import styles from './header.module.scss';

export default function HeaderMenu() {
    return (
        <header className={styles.header}>
            <div className={styles.containerArrows}>
                <div><span className="material-symbols-rounded">chevron_left</span></div>
                <div><span className="material-symbols-rounded">navigate_next</span></div>
            </div>
            <div className={styles.menu}>
                <ul className={styles.ul}>
                    <li>
                        <a href='#'>
                            <span>Premium</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span>Suporte</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span>Baixar</span>
                        </a>
                    </li>
                    <li>
                        |
                    </li>
                    <li>
                        <a href='#'>
                            <span>Inscreva-se</span>
                        </a>
                    </li>
                    <li>
                        <button>Entrar</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}