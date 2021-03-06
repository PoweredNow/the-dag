const addEdges = require('./addEdges');
const addNodes = require('./addNodes');

const importGraph = (
  {
    nodes,
    edges,
    nodeIDGenerator = node => node,
    edgeSourceIDGenerator = edge => edge.source,
    edgeTargetIDGenerator = edge => edge.target
  },
  stateManipulators
) => {
  const theDAGFormatNodes = nodes.map(node => {
    return { nodeID: nodeIDGenerator(node), nodeData: node };
  });
  const theDAGFormatEdges = edges.map(edge => {
    return {
      source: edgeSourceIDGenerator(edge),
      target: edgeTargetIDGenerator(edge)
    };
  });
  addNodes(theDAGFormatNodes, stateManipulators);

  addEdges(theDAGFormatEdges, stateManipulators);
};

module.exports = importGraph;
