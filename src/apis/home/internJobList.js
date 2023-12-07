import { apiHandler } from '@/apis/apiHandler.js'

const apiPath = 'home/internJobList'
export const formatter = {
  data: (data) => {
    return {
      jobList: data.jobList.map(({
        jobName, addresNoDesc, salaryDesc, link 
      }) => {
        return {
          title: jobName,
          salary: salaryDesc,
          area: addresNoDesc,
          link
        }
      }),
      moreLink: data.moreLink
    }
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
      ],
      moreLink: 'string'
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