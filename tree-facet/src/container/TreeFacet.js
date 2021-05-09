import React, {useContext, useEffect} from "react";
import '../css/treeFacet.css';
import ParentNode from '../component/tree/ParentNode';
import data  from '../data/response.json';
import { convertToHierarchy } from '../util/data';
import Context from '../context/Context';

const TreeFacet = () => {

    const {setNodeList, nodeList} = useContext(Context);

    useEffect( () => {
        const dataList = convertToHierarchy(data.data.categories);
        setNodeList(dataList);
    },[])

    return (
        <div className="flex-container box-container">
            {nodeList.map((node, index) => {
                return (
                    <ParentNode data = {node} key={index}/>
                )
            })}
        </div> 
    )    
}

export default TreeFacet;