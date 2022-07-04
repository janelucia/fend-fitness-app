import { gql } from '@apollo/client';

export const PROGRAMS_QUERY = gql`
  query ProgramsQuery {
    appUser(where: { id: "cl4pdljpsvttf0bul89nqxrua" }) {
      id
      programs {
        id
        name
      }
    }
  }
`;

export const PROGRAM_QUERY = gql`
  query ProgramQuery($programid: ID!) {
    appUser(where: { id: "cl4pdljpsvttf0bul89nqxrua" }) {
      id
      name
      programs(where: { id: $programid }) {
        description
        difficulty
        focus
        id
        image {
          url
        }
        name
        weeks {
          id
          title
          workouts {
            id
            name
            duration
            category
            exercises {
              ... on ExerciseWithDuration {
                id
                exercise {
                  name
                  description
                }
                duration
              }
              ... on ExerciseWithReps {
                id
                exercise {
                  name
                  description
                }
                reps
              }
            }
          }
        }
      }
    }
  }
`;
