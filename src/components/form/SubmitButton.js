import styles from './SubmitButton.module.css'

function SubmitButton({ text, handleOnClick }) {
  return (
    <div>
      <button className={styles.btn} onClick={handleOnClick}>{text}</button>
    </div>
  )
}

export default SubmitButton
