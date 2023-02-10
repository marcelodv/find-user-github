import './DeveloperContainer.css'
export default function DeveloperContainer ({avatarUrl, login, name, createdAt, bio, location, company, twitterUsername, publicRepos, followers, following}) {
    return (
        <div id="developer-container">
            <div id="left">
                <img src={avatarUrl} />
            </div>
            <div id="right">
                <h1>{name}</h1>
                <h3>{createdAt}</h3>
                <h3>@{login}</h3>
                <p>{bio}</p>
                <div id="data-numbers">
                    <div className='labels'>
                        <p>Repos</p>
                        <p>Followers</p>
                        <p>Following</p>
                    </div>
                    <div className='data'>
                        <p>{publicRepos}</p>
                        <p>{followers}</p>
                        <p>{following}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}