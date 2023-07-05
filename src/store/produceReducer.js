import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
};

// console.log(produceData);

export default function produceReducer(state = {}, action){
    switch (action.type) {
        case POPULATE:
            const newState = {};
            produceData.forEach(produceObj => {
                newState[produceObj.id] = produceObj;
            })
            return newState;
        default:
            return state;
    }
}