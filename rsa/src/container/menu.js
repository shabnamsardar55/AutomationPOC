import React, {useState} from 'react';
import "./../styles/Content.css";
import Checkbox from '@material-ui/core/Checkbox';
import './../styles/Menu.css'

const Menu = (props) => {
    const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  if(!props.show)
  { 
      return (null);
  }
  return (
    <div className="modal">
        <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />Name</div>
      <div>
      <Checkbox
        checked={!checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />ID</div>
      <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />Sync Status</div>
      <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />User's Domain</div>
      <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />Default Status</div>
      <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />Last Updated</div>
      <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />Updated By</div>
      
    </div>
  );
  
}

export default Menu;