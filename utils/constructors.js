// make a constructor object for storing github data
export class Github {
  constructor(
    username,
    total_repos,
    followers,
    following,
    total_stars,
    total_forks
  ) {
    this.username = username;
    this.total_repos = total_repos;
    this.followers = followers;
    this.following = following;
    this.total_stars = total_stars;
    this.total_forks = total_forks;
  }
}
