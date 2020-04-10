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

export {
    getUsers
};