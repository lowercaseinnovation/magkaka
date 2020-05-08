/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      name
      neighborhood
      city
      province
      country
      owner
    }
  }
`;
export const listPersons = /* GraphQL */ `
  query ListPersons(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        neighborhood
        city
        province
        country
        owner
      }
      nextToken
    }
  }
`;
export const getVisit = /* GraphQL */ `
  query GetVisit($id: ID!) {
    getVisit(id: $id) {
      id
      place
      neighborhood
      city
      province
      country
      owner
    }
  }
`;
export const listVisits = /* GraphQL */ `
  query ListVisits(
    $filter: ModelVisitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        place
        neighborhood
        city
        province
        country
        owner
      }
      nextToken
    }
  }
`;
