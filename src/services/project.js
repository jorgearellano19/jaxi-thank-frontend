import gql from 'graphql-tag';

const getProjects = gql `
query Query{
    getProjects {
        name
        description
        phase
        id
        technologies
    }
}
`;

const updateProject = gql `
mutation updateProject($name: String!, $id: ID!, $technologies: String!, $phase: String!, $description: String!) {
    updateProject(name: $name, description: $description, technologies: $technologies, phase: $phase, id: $id) {
      name
      description
      id
      technologies
      phase
    } 
  } 
`

const createProject = gql`
mutation createProject($name: String!, $technologies: String!, $phase: String!, $description: String!) {
    createProject(name: $name, description: $description, technologies: $technologies, phase: $phase) {
      name
      description
      id
      technologies
      phase
    } 
  } 
`

const deleteProject = gql `
mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      name
      description
      id
      technologies
      phase
    } 
  } 
  
`

export {
    getProjects,
    updateProject,
    createProject,
    deleteProject
};