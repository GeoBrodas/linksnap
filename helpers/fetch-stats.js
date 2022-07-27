import { Github, Hashnode } from '../utils/constructors';
import gql, { GET_USER_ARTICLES, GET_USER_METADATA } from './graphql/queries';

export async function fetchDevStats() {
  // fetch from dev api
  // extract total number of reactions, articles from all posts
  // extract top three posts
  // return an object containg all this data
}

export async function fetchHashnodeStats(username) {
  const res1 = await gql(GET_USER_METADATA, {
    username: username,
  });

  if (
    res1.data.user.username === null ||
    res1.data.user.username === undefined
  ) {
    return {
      error: 'User not found',
    };
  }

  let topPosts = [];

  let totalPosts = res1.data.user.numPosts;
  let counter = Math.ceil(totalPosts / 6);

  for (let i = 0; i <= counter; i++) {
    const res2 = await gql(GET_USER_ARTICLES, {
      page: i,
      username: username,
    });

    res2.data.user.publication.posts.forEach((post) => {
      topPosts.push({
        title: post.title,
        totalReactions: post.totalReactions,
        responseCount: post.responseCount,
        brief: post.brief,
      });
    });
  }

  topPosts.sort((a, b) => b.totalReactions - a.totalReactions);

  topPosts = topPosts.slice(0, 2);

  return new Hashnode(
    res1.data.user.username,
    res1.data.user.numFollowers,
    res1.data.user.numFollowing,
    totalPosts,
    res1.data.user.numReactions,
    topPosts,
    res1.data.user.dateJoined
  );
}

export async function fetchGitHubStats(username) {
  // fetch from github api
  let res1 = await fetch(`https://api.github.com/users/${username}`);
  let stars = 0;
  let forks = 0;
  let top2repos = [];

  let user = await res1.json();

  if (user.message === 'Not Found') {
    return {
      error: 'User not found',
    };
  }

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
