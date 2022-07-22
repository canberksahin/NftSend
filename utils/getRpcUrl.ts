import sample from 'lodash/sample';

// Array of available nodes to connect to
export const nodes = ['https://polygon-mumbai.g.alchemy.com/v2/4nAcRCaih85vrP44VgnEIaNrEPdfw70d'];

const getNodeUrl = () => sample(nodes);

export default getNodeUrl;
