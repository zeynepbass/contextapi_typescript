import React from 'react'
export interface  PropTypes {
    userArray:string[] | number []
}
const Veri = (props:PropTypes) => {
    
  return (
    <div>
        {props.userArray?.map((item,index:number)=>{
            return(
                <div>
                    {item}
                </div>
            )
        })}
    </div>
  )
}

export default Veri