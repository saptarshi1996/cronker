import { useQuery } from 'react-query'

import axios from 'axios'

const api = {
  listCron: () => axios.get('/cron'),
  getCron: ({ id }: { id: number }) => axios.get(`/cron/${id}`),
}

export function useCronListQuery() {
  const cronListQuery = useQuery('cron', async () => {
    const response = await api.listCron()
    return response.data
  })

  return cronListQuery
}

export function useGetCronQuery(id: number) {
  const getCronQuery = useQuery(['cron', async () => {
    const response = await api.getCron({ id })
    return response.data
  }])

  return getCronQuery
}
