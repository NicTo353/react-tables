import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';


const RecordsTable = () => {
  const [tableData, setTableData] = React.useState(['name']);

  const url = "https://jsonplaceholder.typicode.com/users";


  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        return setTableData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>{console.log(tableData)}</div>;
};

ReactDOM.render(<RecordsTable />, document.getElementById("root"));
