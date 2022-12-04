import styles from './Modal.module.css'


const Modal = (props) => {

  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <div className={`${styles.modal} ${styles.card}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </div>
    
  )
}

export default Modal