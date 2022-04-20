import style from './Logotipo.module.css'
import logo from '../../assets/img/logotipo.png';

function Logotipo() {
    return (
        <div className={style.logotipo}>
            <div className={style.imgField}><img src={logo} /></div>
            <span className={style.text}>Logotipo</span>
        </div>
    )
}

export default Logotipo