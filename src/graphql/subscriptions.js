/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson($owner: String!) {
    onCreatePerson(owner: $owner) {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson($owner: String!) {
    onUpdatePerson(owner: $owner) {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson($owner: String!) {
    onDeletePerson(owner: $owner) {
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
export const onCreateVisit = /* GraphQL */ `
  subscription OnCreateVisit($owner: String!) {
    onCreateVisit(owner: $owner) {
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
export const onUpdateVisit = /* GraphQL */ `
  subscription OnUpdateVisit($owner: String!) {
    onUpdateVisit(owner: $owner) {
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
export const onDeleteVisit = /* GraphQL */ `
  subscription OnDeleteVisit($owner: String!) {
    onDeleteVisit(owner: $owner) {
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
