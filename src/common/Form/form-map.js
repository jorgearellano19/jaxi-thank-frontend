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
    }
}