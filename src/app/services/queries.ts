import { gql } from '@apollo/client';

export const UserListQuery = gql`
  query UsersListQuery($limit: Int!, $offset: Int!) {
    users(pageInfo: { limit: $limit, offset: $offset }) {
      count
      pageInfo {
        offset
        limit
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        email
      }
    }
  }
`;
