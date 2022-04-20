import style from '../layout/Calc.module.css'
import AnimatedPage from "./AnimatePage";

import style from '../layout/Calc.module.css'

function Calculadora() {
  let calculate;
  return (
    <div className={style.content}>
      <AnimatedPage>
        <div id='tb_calculate' className={style.digit}>Conteudo</div>
        <div className={style.calculator}>
          <Bt_Button handleClick={'1'} />
          <Bt_Button handleClick={'2'} />
          <Bt_Button handleClick={'3'} />
          <Bt_Button handleClick={'+'} />
          <Bt_Button handleClick={'4'} />
          <Bt_Button handleClick={'5'} />
          <Bt_Button handleClick={'6'} />
          <Bt_Button handleClick={'-'} />
          <Bt_Button handleClick={'7'} />
          <Bt_Button handleClick={'8'} />
          <Bt_Button handleClick={'9'} />
          <Bt_Button handleClick={'X'} />
          <Bt_Button handleClick={'/'} />
          <Bt_Button handleClick={'0'} />
          <Bt_Button handleClick={','} />
          <Bt_Button handleClick={'='} />
        </div>
      </AnimatedPage>
    </div>
  )
}

const Bt_Button = ({ handleClick }) => (
  <button className={style.BtNumber} type="button" onClick={KeyPressed}>{handleClick}</button>
);


function KeyPressed({ key }){
  document.getElementById("tb_calculate").innerHTML = key;
}

export default Calculadora