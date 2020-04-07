import React, { Component } from 'react'
import Repos from './Repos'

export const gitHubSearch = {
    url:'https://api.github.com/search/repositories',
    authValue: 'token 1a2807b7850a85c39dd79372f2f3833e2f0c4720'
};

class Gitreposearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
             total:'0',
             repos:[]
        }
    }
 
    onMessageChange(text){
          fetch(gitHubSearch.url +'?q={name=}' + text +'}',{
            headers: {
               authorization: gitHubSearch.authValue
             }
          })
        .then(res => res.json())
        .then((data) => {
          console.log(data) 
          this.setState({ total: data.total_count })
          this.setState({ repos: data.items })
        })
        .catch(console.log)
      }
    
    render() {
        return (
            <div>
                <h1>Search GitHub Repos</h1>
                <p>
                <label>
                     <input type="text" onChange={e=>this.onMessageChange(e.target.value)}></input>
                </label>
                </p>
                <p>
                    Total Repos found : {this.state.total}
                </p>
                <Repos repos={this.state.repos} /> 
            </div>
        )
    }
}

export default Gitreposearch
