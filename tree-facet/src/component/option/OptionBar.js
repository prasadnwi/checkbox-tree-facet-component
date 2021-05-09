import React, { useContext } from "react";
import {Button} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Context from '../../context/Context';
import '../../css/optionBar.css';

const OptionBar = () => {

    const { unDoSelection, selectAll, handleTreeVisibility } = useContext(Context);

    return (
        <div>
            <div className="button-wrapper">
              <Switch color="primary" onChange={handleTreeVisibility} inputProps={{ 'aria-label': 'show all selected items' }} />
              <span>Show all Selected items</span>
            </div>
            <div>
            <div className="button button-wrapper">
                <Button variant="contained" size="small" color="primary" onClick={selectAll} inputProps={{ 'aria-label': 'select all'}} >
                    Select All
                </Button>
            </div>
            <div className="button button-wrapper">
                <Button variant="contained" size="small" onClick={unDoSelection} inputProps={{ 'aria-label': 'undo selection'}}>
                    Undo Selection
                </Button>
            </div>
            </div>
        </div>
    )
}

export default OptionBar;