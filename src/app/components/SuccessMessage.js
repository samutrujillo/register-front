// app/components/SuccessMessage.js
import { Alert } from 'react-bootstrap';
import styles from '../styles/SuccessMessage.module.css';

export default function SuccessMessage({ code }) {
  return (
    <div className={styles.success}>
      <Alert variant="success">
        <h4>¡Registro completado!</h4>
        <p>Tu código de participación es: <strong>{code}</strong></p>
      </Alert>
    </div>
  );
}
