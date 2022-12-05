import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { useRouter } from 'next/router'

import axios from 'axios'

const queryClient = new QueryClient()

axios.defaults.baseURL = 'http://localhost:9090'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  axios.interceptors.request.use(async (config: any) => {
    const token = localStorage.getItem('token')
    if (token) {
      console.log('token')
      config.headers['Authorization'] = token as string
    } else {
      await router.push('/login')
    }
    return config
  })


  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
