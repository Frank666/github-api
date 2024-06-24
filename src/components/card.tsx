import { GithubResult } from "../props/GithubResult";

const Card = ({
  login,
  id,
  url,
  avatar_url,
  type,
  name,
  location,
  company,
  publicRepos,
  followers,
  following,
}: GithubResult) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>
          {login} - {name} ({id}) - Type: {type}
        </h2>
      </div>
      <div className="card-body">
        <img src={avatar_url} />
        <p>Location: {location}</p>
        <p>Company: {company}</p>
        <p>Public Repos: {publicRepos}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Url: {url}</p>
      </div>
    </div>
  );
};

export default Card;
