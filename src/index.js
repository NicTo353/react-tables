import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

const Table = ({props}) => {


  return (
    <table>
      <thead>
        <tr>
          {Object.keys(props[0]).map((header, index) => {
            return <td key={index}>{header}</td>
          })}
        </tr>
      </thead>
      <tbody>
        {
          props.map(row => {
            return <tr key={row.id}></tr>
          })
        }
      </tbody>
    </table>
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
    <div>{tableData ? (<Table props={tableData}></Table>) : ('Loading...')}</div>
  );
};

ReactDOM.render(<RecordsTable />, document.getElementById("root"));
