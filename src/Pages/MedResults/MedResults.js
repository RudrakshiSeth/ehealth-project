import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import  {useEffect} from 'react';

const columns = [
  { id: 'MedName', label: 'Medicine Name', minWidth: 170 },
  { id: 'frequency', label: 'Medicine frequency ', minWidth: 100 },
  {
    id: 'startdate',
    label: 'Medicine Start date',
    minWidth: 170,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'enddate',
    label: 'Medicine end date',
    minWidth: 170,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  }
];

function createData(MedName, frequency, startdate, enddate) {
  //const density = population / size;
  return { MedName, frequency, startdate,enddate };
}

const rows = [
    createData('Telma(40)', 'Twice a day', '01/09/2014', '01/09/2019'),
    createData('Asprin', 'Thrice a day', '01/10/2010', '01/09/2019'),
    createData('Medimix	', 'Once a day', '01/09/2000', 'Present'),
];

function MedResults(props) {

  useEffect(() => {
    async function fetchMyAPI() {
      // let response = await fetch('http://localhost:3000/api/medication/:alysa')
      // response = await response.json()
      alert("hello");
      let temp = "http://localhost:3000/api/medication/:alysa";
      let res = await fetch(temp, {
        method: "GET"
      });
      let resJson = await res.json();
      console.log(resJson[0].frequency);
    }

    fetchMyAPI()
  }, [])
    
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    
    setPage(newPage);

  
  
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    alert("hello buddy i am handle row change ")
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default MedResults ; 
