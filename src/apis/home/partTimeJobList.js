import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'home/partTimeJobList'
export const formatter = {
  data: (data) => {
    return data.jobList.map(({
      jobName, addresNoDesc, salaryDesc, link 
    }) => {
      return {
        title: jobName,
        salary: salaryDesc,
        area: addresNoDesc,
        link
      }
    })    
  }
}

export default {
  get: async () => {
    const responseType = {
      jobList: [
        {
          jobName: 'string',
          addresNoDesc: 'string',
          salaryDesc: 'string',
          link: 'string'
        }
      ]
    }
      
    return await apiHandler(
      {
        method: 'GET',
        apiPath,
        responseType,
        responseFormatter: formatter.data
      }
    )
  },
  post: () => {},
  put: () => {},
  delete: () => {}
}