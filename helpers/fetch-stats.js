import { Github } from '../utils/constructors';

export async function fetchDevStats() {
  // fetch from dev api
  // extract total number of reactions, articles from all posts
  // extract top three posts
  // return an object containg all this data
}

export async function fetchHashnodeStats() {
  // fetch from hashnode API
  // extract total reactions, views, articles writter, etc
  // extract top three posts
  // return object
}

export async function fetchGitHubStats(username) {
  // fetch from github api
  let res1 = await fetch(`https://api.github.com/users/${username}`);
  let stars = 0;
  let forks = 0;
  let topStars = 0;
  let top2repos = [];

  let user = await res1.json();

  let counter = user.public_repos / 30;

  // approx counter to the next digit
  counter = Math.ceil(counter);

  for (let i = 1; i <= counter; i++) {
    let res2 = await fetch(
      `https://api.github.com/users/${username}/repos?page=${i}`
    );

    let repos = await res2.json();

    repos.forEach((repo) => {
      if (repo.stargazers_count) {
        stars += repo.stargazers_count;

        top2repos.push({
          name: repo.name,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          description: repo.description,
        });
      }
      if (repo.forks_count) {
        forks += repo.forks_count;
      }
    });
  }

  top2repos.sort((a, b) => b.stars - a.stars);

  // keep first three repos
  top2repos = top2repos.slice(0, 2);

  let returnObject = new Github(
    user.login,
    user.public_repos,
    user.followers,
    user.following,
    stars,
    forks,
    top2repos
  );

  return returnObject;
}
