import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

const Table = ({tableData}) => {


  return (
    <table>
      <thead>
        <tr>
          {Object.keys(tableData[0]).map((header, index) => {
            return <td key={index}>{header}</td>
          })}
        </tr>
      </thead>
      <tbody>
        {
          tableData.map(rowData => {
            return <tr key={rowData.id}>{Object.values(rowData).map((cellData)=><TableCell content={cellData}></TableCell>)}</tr>
          })
        }
      </tbody>
    </table>
  )
}

const TableCell = ({content}) => {
  const needTable = typeof(content) === 'object';
  console.log(typeof(content))
  return (
    <td>
      {needTable?(<div><Table tableData={[content]}></Table></div>) : (<div>{content}</div>)}
    </td>
  )
}


const RecordsTable = () => {
  const [tableData, setTableData] = React.useState();

  const url = "https://jsonplaceholder.typicode.com/users";


  React.useEffect(() => {
    axios
      .get(url) 
      .then(res => res.data)
      .then(data => setTableData(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div>{tableData ? (<Table tableData={tableData}></Table>) : ('Loading...')}</div>
  );
};

ReactDOM.render(<RecordsTable />, document.getElementById("root"));
