export const GET_USER_METADATA = `
    query GetMetaData($username: String!) {
        user(username: $username) {
            username,
            numFollowing,
            numFollowers,
            numPosts,
            numReactions
        }
    }
`;

export const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!, $username: String!) {
        user(username: $username) {
                publication {
                    posts(page: $page) {
                        title
                        totalReactions
                        responseCount
                    }
                }
            }
    }
`;

export default async function gql(query, variables = {}) {
  const data = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return data.json();
}
