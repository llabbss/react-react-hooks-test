import React, { useEffect, Fragment,useContext } from 'react';
import { Link } from "react-router-dom";
import Spinner from "../layout/spinner";
import Repos from "../repos/repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match })=> {
    const githubContext = useContext(GithubContext);
    const { getUser, loading, user,repos,getUserRepos } = githubContext
    useEffect(() => {
      getUser(match.params.login)
      getUserRepos(match.params.login)
      // eslint-disable-next-line 
     },[])
    const {hireable,name ,avatar_url, location,bio,company,blog,followers,following,html_url,public_gists,public_repos } = user
    if(loading)return <Spinner></Spinner>
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">返回</Link>
        是否在职：{ hireable?(<i className="fa fa-check text-success"></i>):(<i className="fa fa-times-circle text-danger"></i>)}
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url } className="round-img" style={{width:'150px'}} alt=""/>
            <h1>{name}</h1>
            <p>所在地：{location}</p>
          </div>
          <div>
          {(
            <Fragment>
              <h3>个人简介</h3>
              <p>{bio?bio:'暂无简介'}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1 text-center">访问</a>
          {(!!company || !!blog) && (<ul>
            <li>
              {company && (
                <Fragment>
                  <strong>公司：{company}</strong>
                </Fragment>
              )}
            </li>
            <li>
            {blog && (
                <Fragment>
                  <strong>网址：{blog}</strong>
                </Fragment>
              )}
            </li>
          </ul>)}
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers:{followers}</div>
          <div className="badge badge-success">Following:{following}</div>
          <div className="badge badge-light">Public Repos:{public_repos}</div>
          <div className="badge badge-dark">Public Gists:{public_gists}</div>
        </div>
        {repos && repos.length &&(<Repos repos={repos}></Repos>)}
      </Fragment>
    );
}

export default User;
