import { useQuery } from 'react-query'

import Axios from '../../config/axios'

const api = {
  listCron: () => Axios.get('/cron')
}

export function useCronListQuery() {
  const cronListQuery = useQuery('cron', async () => {
    const response = await api.listCron()
    return response.data
  })

  return cronListQuery
}
