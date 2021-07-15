import {BUY_CAKE} from './cakeTypes'

//action creater
export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}