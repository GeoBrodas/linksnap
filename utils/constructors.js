// make a constructor object for storing github data
export class Github {
  constructor(
    username,
    total_repos,
    followers,
    following,
    total_stars,
    total_forks,
    top_repos
  ) {
    // user api data
    this.username = username;
    this.total_repos = total_repos;
    this.followers = followers;
    this.following = following;

    // repo api
    this.total_stars = total_stars;
    this.total_forks = total_forks;

    // top repos
    this.top_repos = top_repos;
  }
}

export class Hashnode {
  constructor(
    username,
    followers,
    following,
    total_posts,
    total_reactions,
    top_posts
  ) {
    this.username = username;
    this.followers = followers;
    this.following = following;
    this.total_posts = total_posts;
    this.total_reactions = total_reactions;
    this.top_posts = top_posts;
  }
}
