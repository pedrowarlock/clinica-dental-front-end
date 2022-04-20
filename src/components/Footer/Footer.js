import styles from './Footer.module.css'; 
import { Link } from "react-router-dom"

function Footer(){
    return(
        <div className={styles.content}>
            <span>Todos os direitos reservados @2022 <a rel="noopener noreferrer" href="https://github.com/pedrowarlock" target="_blank">Pedro Pinheiro</a></span>
            
            <b>Versão: <span>1.0.0 </span></b> 
        </div>
    )
}

export default Footer