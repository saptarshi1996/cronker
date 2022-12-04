import CronTable from "./CronTable";

import {
  useCronListQuery,
} from './cronHooks'

export default function CronDetails() {

  const cronListQuery = useCronListQuery()

  return (
    <>
      <CronTable 
        cronList={cronListQuery.data?.crons}
        isLoading={cronListQuery.isLoading}
      />
    </>
  )
}
