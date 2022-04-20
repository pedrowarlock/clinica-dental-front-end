import style from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';

function Header({toggleMenu}) {
    return (
        <div className={style.content} onClick={toggleMenu}>
            {toggleMenu ? <ToggleMenu />: ''}
        </div>
    )
}

function ToggleMenu() {
    return (
        <div>
            <MenuIcon />
        </div>
    )
}

export default Header