import React, { useState ,useContext} from 'react'
import AlertContext from "../../context/alert/alertContext";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');   
  const changeValue = evt => {
    if(evt.target.name === 'text'){
      setText(evt.target.value)
    }
  }
  const onSubmit = evt => {
    evt.preventDefault()
    console.log(text)
    if(text === ''){
      alertContext.showAlert("请输入...",'light')
    }else{
      githubContext.searchUsers(text)
      setText('')
    }
  }
    return (
      <div>
        <form className="form" onSubmit={onSubmit}>
          <input type="text" name="text" placeholder="Search User" value={ text } onChange={changeValue}/>
          <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
        
        {
          githubContext.users.length>0 && 
          <button  className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
        }
      </div>
    )
}

export default Search
