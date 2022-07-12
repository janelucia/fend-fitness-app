import { gql } from '@apollo/client';

export const PROGRESS_QUERY = gql`
  query progressQuery($programid: ID!) {
    progresses(where: { program: { id: $programid } }) {
      id
    }
  }
`;
