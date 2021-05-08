/**
 * get node list with parents node
 * @param {array}  nodeList
 * @returns {array} formatedNodeList
 */
export const convertToHierarchy = (nodeList) => {
    let formatedNodeList = _createStructure(nodeList);

    for (let i = formatedNodeList.length - 1; i >= 0; i--) {
        let currentNode = formatedNodeList[i];

        // checking whether if the current node is a parent node
        if (parseInt(currentNode.parent) !== 0) {
            let parentNode = _getparentNode(currentNode, formatedNodeList);
             
            if (parentNode != null) {
                parentNode.children.push(currentNode);
                formatedNodeList.splice(i, 1);
            }
        }
    }

    return formatedNodeList;
}
/**
 * create structure for items with new format
 * @param {array} nodes 
 * @returns {array} structuredObjects
 */
const _createStructure = (nodes) => {
    let structuredObjects = [];

    for (let i = 0; i < nodes.length; i++) {
        structuredObjects.push({...nodes[i], children: [], isSelected : false});
    }

    return structuredObjects;
}

/**
 * 
 * @param {object} childNode 
 * @param {array} nodeList 
 * @returns parentNode || null
 */
const _getparentNode = (childNode, nodeList) => {
    let parent = null;

    for (let  i = 0; i < nodeList.length; i++) {
        if (nodeList[i].id === childNode.parent) {
            return nodeList[i];
        }
    }

    return parent;
}

const _updateNode = (node, nodeId, updatedNode) => {
    if (node.id == nodeId) {
        node = updatedNode;
    } else if (node.children.length){
        node.children = node.children.map(function(item) {
            return _updateNode(item, item.id, updatedNode)
        })
    }

    return node;
}

export const updateNodeSelection = (node, updatedNode) => {
    console.log(node);
    console.log(updatedNode);
    let x = _updateNode(node[0], updatedNode.id, updatedNode);
    // console.log(x);
    let y = [];
    y.push(x);
   return y;
}
