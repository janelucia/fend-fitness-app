import { gql } from '@apollo/client';

export const UPSERT_PROGRESS = gql`
  mutation UpsertProgressMutation(
    $programid: ID!
    $weekid: ID!
    $workoutid: ID!
    $nextworkoutid: ID!
    $progressid: ID!
  ) {
    upsertProgress(
      upsert: {
        create: {
          appUser: { connect: { id: "cl4pdljpsvttf0bul89nqxrua" } }
          program: { connect: { id: $programid } }
          week: { connect: { id: $weekid } }
          workout: { connect: { id: $workoutid } }
          finished: false
        }
        update: {
          appUser: {
            update: { where: { id: "cl4pdljpsvttf0bul89nqxrua" }, data: {} }
          }
          program: { update: { where: { id: $programid }, data: {} } }
          week: { update: { where: { id: $weekid }, data: {} } }
          workout: { connect: { where: { id: $nextworkoutid }} }
          finished: false
        }
      }
      where: { id: $progressid }
    ) {
      id
      appUser {
        id
        name
      }
      program {
        id
        name
      }
      week {
        id
        title
      }
      workout {
        id
        name
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
