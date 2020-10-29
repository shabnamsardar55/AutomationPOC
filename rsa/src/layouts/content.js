import React, { useState } from 'react';
import "./../styles/Content.css";
import Table from "../components/dataTable.js";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const content = (props) => {
    return (
        <div className="Content">
            <div>
               <span className="Column">Drag a column name here to group the items by the value within that column.</span><span className="link"><RemoveRedEyeIcon color='primary'/> <AddCircleIcon color='primary'/></span>
            </div>
            <Table/>
          
        </div>
      );
}

export default content;