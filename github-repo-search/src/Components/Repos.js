import React from 'react'

const Repos = ({ repos }) => {
    return (
    <div>
        {repos.map((repo) => (
        <div key={repo.id}>
            <div>
                <h5> {repo.name}</h5>
                <h5> {repo.description}</h5> 
            </div>   
        </div>
        ))}
    </div>
    )
};

export default Repos