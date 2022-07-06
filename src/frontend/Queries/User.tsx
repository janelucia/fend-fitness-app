import { gql, useQuery } from '@apollo/client';

const USER_QUERY = gql`
  query UserQuery {
    appUser(where: { id: "cl4pdljpsvttf0bul89nqxrua" }) {
      id
      name
      age
      image {
        url
      }
      progresses(orderBy: publishedAt_DESC) {
        id
        createdAt
        program {
          id
          name
          image {
            url
          }
        }
        workout {
          name
          category
          duration
        }
        week {
          title
        }
      }
    }
  }
`;

const UserQuery = () => {
  const { loading, error, data } = useQuery(USER_QUERY);
  if (loading) return <p className="text-light text-center">loading ...</p>;
  if (error) return <p className="text-light text-center">error :/ </p>;
  return data.appUser;
};

export default UserQuery;
