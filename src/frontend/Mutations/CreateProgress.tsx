import { gql } from '@apollo/client';

export const CREATE_PROGRESS = gql`
  mutation CreateProgressMutation(
    $programid: ID!
    $weekid: ID!
    $workoutid: ID!
  ) {
    createProgress(
      data: {
        appUser: { connect: { id: "cl4pdljpsvttf0bul89nqxrua" } }
        program: { connect: { id: $programid } }
        week: { connect: { id: $weekid } }
        workout: { connect: { id: $workoutid } }
        finished: false
      }
    ) {
      id
      appUser {
        id
      }
      program {
        id
      }
      week {
        id
      }
      workout {
        id
      }
      finished
    }
  }
`;

export const PUBLISH_PROGRESS = gql`
  mutation PublishProgress($progressid: ID!) {
    publishProgress(where: { id: $progressid }) {
      id
    }
  }
`;
