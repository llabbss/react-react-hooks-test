import React ,{Fragment} from 'react'
import spinner from './spinner.gif'
 const Spinner = () => {
  return (
   <Fragment>
     <img src={spinner} alt="loading" style={{display:"block",margin:"auto",width:"200px"}}/>
   </Fragment>
  )
}
export default Spinner