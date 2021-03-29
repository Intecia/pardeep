import React,{memo} from 'react'

export const OnePhoto=({plink})=>{
  console.log("photo clicked",plink);
  return (
    <div>
      <img src={plink} alt="image not available" width="500px" height="500px"/>
    </div>
  )
}

export default memo(OnePhoto)
