/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
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
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
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
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
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
export const createVisit = /* GraphQL */ `
  mutation CreateVisit(
    $input: CreateVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    createVisit(input: $input, condition: $condition) {
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
export const updateVisit = /* GraphQL */ `
  mutation UpdateVisit(
    $input: UpdateVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    updateVisit(input: $input, condition: $condition) {
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
export const deleteVisit = /* GraphQL */ `
  mutation DeleteVisit(
    $input: DeleteVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    deleteVisit(input: $input, condition: $condition) {
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
