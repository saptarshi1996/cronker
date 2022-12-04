import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function CronTable({
  cronList = [],
  isLoading,
}: {
  cronList: Array<any>,
  isLoading: boolean
}) {

  const RenderTable = () => {

    if (isLoading) return <>Loading</>

    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Request Url</TableCell>
                <TableCell align="center">Request Method</TableCell>
                <TableCell align="center">Cron Expression</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cronList.map((cron) => (
                <TableRow
                  key={cron.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {cron.name}
                  </TableCell>
                  <TableCell align="center">{cron.requestUrl}</TableCell>
                  <TableCell align="center">{cron.requestMethod}</TableCell>
                  <TableCell align="center">{cron.cronExpression}</TableCell>
                  <TableCell align="center">{cron.isActive ? <>Active</> : <>Inactive</>}</TableCell>
                  <TableCell align="center">
                    <Button variant="text">Edit</Button>
                    <Button variant="text">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }

  return (
    <>
      <RenderTable />
    </>
  )
}
