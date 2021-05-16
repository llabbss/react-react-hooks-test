import React ,{useContext} from 'react'
import GithubContext from "../../context/github/githubContext";
import UserItem from './UserItem'
import Spinner from '../layout/spinner'

const Users = ()=> {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext
  if(loading){
    return <Spinner></Spinner>
  }else{
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem user={user} key={user.id}></UserItem>
        ))}
      </div>
    )
  }
}
const userStyle={
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap:'1rem'
}
export default Users
