import gql from 'graphql-tag';

const getProjects = gql `
query Query{
    getProjects {
        name
        description
        phase
        technologies
    }
}
`;

export {
    getProjects
};