import { gql } from '@apollo/client';

const PROGRAMS_QUERY = gql`
  query GetPrograms {
    programs {
      id
      name
    }
  }
`;

export default PROGRAMS_QUERY;
