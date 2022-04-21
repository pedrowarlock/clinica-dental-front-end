import { Link, useLocation } from "react-router-dom"
import { useState } from 'react'

//Date
import { SidebarDate } from '../../config/SidebarDate';

//icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

//modules
import style from './Menu.module.css'

function Menu() {
   const location = useLocation();
   const [openMenuIndex, setOpenMenuIndex] = useState(undefined);
   const onClickMenu = (index) => { (openMenuIndex === index ? setOpenMenuIndex(undefined) : setOpenMenuIndex(index)) };

   return (
      <div className={style.navContent}>
         <ul className={style.sidebarList}>
            {SidebarDate.map((menuItem, keyItem) => {
               return (
                  <div key={keyItem}>
                     {
                        menuItem.subMenu ? (
                           <div>
                              <MenuRender
                                 items={menuItem}
                                 onClick={() => onClickMenu(keyItem)}
                                 isOpen={openMenuIndex === keyItem}
                              />
                              <SubMenuRender
                                 subItens={menuItem}
                                 isOpen={openMenuIndex === keyItem}
                              />
                           </div>
                        ) : (
                           <Link to={menuItem.link} style={{ textDecoration: 'none' }}>
                              <li className={style.item} id={location.pathname === menuItem.link ? style.siderActive : ""}>
                                 <div id={style.icon} >{menuItem.icon}</div>
                                 <div id={style.title}>{menuItem.title}</div>
                              </li>
                           </Link>
                        )
                     }
                  </div>
               )
            })
            }
         </ul>
      </div>
   )
}

function MenuRender({ items, onClick, isOpen }) {
   return (
      <div
         className={style.noselect}
         onClick={onClick}
      >
         <li className={style.item}>
            <div id={style.icon} >{items.icon}</div>
            <div id={style.title}>{items.title}</div>
            {
               isOpen ?
                  <div ><ArrowDropDownIcon /></div>
                  :
                  <div ><ArrowLeftIcon /></div>
            }
         </li>
      </div>
   )
}

function SubMenuRender({ subItens, isOpen }) {
   const location = useLocation();
   return (
      <>
         {subItens.subMenu.map((subMenuItem, keySubItem) => (
            <div key={keySubItem} id={!isOpen ? style.sideItemOpening : ""}>
               <Link to={subItens.link + subMenuItem.link} style={{ textDecoration: 'none' }}>
                  <ul>
                     <li
                        className={style.subItem}
                        id={location.pathname === subItens.link + subMenuItem.link ? style.subItemActive : null}
                     >
                        {subMenuItem.title}
                     </li>
                  </ul>
               </Link>
            </div>
         ))}
      </>
   )
}

export default Menu