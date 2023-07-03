

export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}


// remove iteams
export const DLT = (_id) => {
    return {
        type: "RMV_CART",
        payload: _id
    }
}

// remove individual iteam

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}
export const ADDONE = (iteam) => {
    return {
        type: "ADD_ONE",
        payload: iteam
    }
}
export const RMVALL = (iteam) => {
    return {
        type: "RMV_ALL",
        payload: iteam
    }
}