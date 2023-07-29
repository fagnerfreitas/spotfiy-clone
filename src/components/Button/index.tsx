
import styles from './Button.module.scss'

interface ButtonInterface {
    text: string
}

export default function Button({ text }: ButtonInterface) {

    return (
        <button className={styles.btn}>
            <span>{text}</span>
        </button>
    )
}