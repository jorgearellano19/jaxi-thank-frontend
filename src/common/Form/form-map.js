export const mapForms = (type) => {
    if(type === 'user') {
        return {
            name: {
                label: 'Name',
                name: 'name',
                required: true,
                message: 'Name is required!'
            }, 
            timeInCompany: {
                label: 'Time in Company',
                name: 'timeInCompany',
                required: true,
                message: 'Time in company is required'
            },
            currentJob: {
                label: 'Current Job',
                name: 'currentJob',
                required: true,
                message: 'Message is required '
            }
        }
    } else {
        return {
            name: {
                label: 'Name',
                name: 'name',
                required: true,
                message: 'Name is required!'
            }, 
            description: {
                label: 'Description',
                name: 'description',
                required: true,
                message: 'Description is required!'
            }, 
            phase: {
                label: 'Phase',
                name: 'phase',
                type: 'select',
                required: true,
                message: 'Phase is required!'
            },
            technologies: {
                label: 'Technologies',
                name: 'technologies',
                type: 'select',
                required: true,
                message: 'Technologies are required!'
            }
        }
    }
}