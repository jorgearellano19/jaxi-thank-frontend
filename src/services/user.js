import gql from 'graphql-tag';

const getUsers = gql `
query Query{
    getUsers {
        name
        timeInCompany
        currentJob
        id
      }
}
`;

const updateUser = gql `
mutation updateUser($name: String!, $id: ID!, $timeInCompany: Int!, $currentJob: String!) {
    updateUser(name: $name, timeInCompany: $timeInCompany, currentJob: $currentJob , id: $id) {
      name
      timeInCompany
      currentJob
    } 
  } 
`

const createUser = gql `
mutation createUser($name: String!, $timeInCompany: Int!, $currentJob: String!) {
    createUser(name: $name, timeInCompany: $timeInCompany, currentJob: $currentJob) {
      name
      timeInCompany
      currentJob
      id
    } 
  } 
`

const deleteUser = gql `
mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      name
      id
      currentJob
    } 
  } 
  
`
export {
    getUsers,
    deleteUser,
    createUser,
    updateUser
};