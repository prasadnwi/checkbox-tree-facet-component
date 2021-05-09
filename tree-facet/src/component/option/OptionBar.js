import React, { useContext } from "react";
import {Button} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Context from '../../context/Context';
import '../../css/optionBar.css';

const OptionBar = () => {

    const { unDoSelection, selectAll } = useContext(Context);

    return (
        <div>
            <div className="button-wrapper">
            <Switch color="primary"/>
            <span>Show all Selected items</span>
            </div>
            <div>
            <div className="button button-wrapper">
                <Button variant="contained" size="small" color="primary" onClick={selectAll}>
                    Select All
                </Button>
            </div>
            <div className="button button-wrapper">
                <Button variant="contained" size="small" onClick={unDoSelection}>
                    Undo Selection
                </Button>
            </div>
            </div>
        </div>
    )
}

export default OptionBar;