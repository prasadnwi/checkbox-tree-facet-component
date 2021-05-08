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
        structuredObjects.push({...nodes[i], children: []});
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