import pincode from "./pincode";
import actions from 'constants/actions'

import {describe, expect} from '@jest/globals'

describe('pass reducer', () => {

    const initialState = {
        pin: [null, null, null, null],
        dotsGuessStatus: [false, false, false, false]
    }

    it('should return the initial state', () => {
        expect(pincode(undefined, {})).toEqual({initialState});
    });

    it('should handle GENERATE_PIN', () => {
        const generatedPin = Array.from({length: 4}, () => Math.floor(Math.random() * 9))
        const startAction = {
            type: actions.GENERATE_PIN
        };
        // it's empty on purpose because it's just starting to fetch posts
        expect(pincode({}, startAction)).toEqual({pin: generatedPin});
    });

    it('should handle CHANGE_PIN', (state) => {

        const Action = {
            type: actions.CHANGE_PIN,
            payload: 1
        };

       const testDots =  Object.assign([], state.dotsGuessStatus, {[payload.index]: digit === state.pin[payload.index]})

        expect(pincode({}, Action)).toEqual(testDots.payload.index.true);
    });


});