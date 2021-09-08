import React ,{memo} from 'react'
import clearFloat from '../asssets/clear.png'

function FloatComp (){
    return (
        <>
       <img src={clearFloat} alt="clear props"></img>
        <div className="float-container">
          <div className="left-float">float</div>
          <div>not float</div>
          <p>清除浮动：子元素浮动，造成父元素高度坍塌</p>
        <code>1、父元素添加：overflow: hidden;</code><br></br>
        <code>2、子元素设置clear:both不允许有浮动 </code><br></br>
        <code>3、父元素伪类after/before设置clear:both不允许有浮动 </code><br></br>
        
          <div className="clear-float">
            <div className="left">float left</div>
            <div className="right">float right</div>
            {/* <div style={{clear:'both'}}>clear both</div> */}

          </div>
        </div>
    </>
    )
}

export default  memo(FloatComp)