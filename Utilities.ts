enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf1ec" block="CM Utilities"
namespace Utilities {
    /**
     */
    //% block

    
    export function WhiteDetected(num: number) {
        let PinValue = 0
        if (num == 0) {
            PinValue = pins.analogReadPin(AnalogPin.P0)
        } else if (num == 1) {
            PinValue = pins.analogReadPin(AnalogPin.P1)
        } else {
            PinValue = pins.analogReadPin(AnalogPin.P2)
        }
        if (PinValue < 500) {
            return 1
        } else {
            return 0
        }
    }

    /**
     */
    //% block
    export function ShowSensorLines() {
        let PinBinary = 0
        if (WhiteDetected(0) == 1) {
            PinBinary |= 1;
        }
        if (WhiteDetected(1) == 1) {
            PinBinary |= 2;
        }
        if (WhiteDetected(2) == 1) {
            PinBinary |= 4;
        }
        switch (PinBinary) {
            case 0:
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
        `       )
                break;
            case 7:
                basic.showLeds(`
                # . # . #
                # . # . #
                # . # . #
                # . # . #
                # . # . #
        `       )
                break;
            case 6:
                basic.showLeds(`
                . . # . #
                . . # . #
                . . # . #
                . . # . #
                . . # . #
        `       )
                break;
            case 5:
                basic.showLeds(`
                # . . . #
                # . . . #
                # . . . #
                # . . . #
                # . . . #
        `       )
                break;
            case 4:
                basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
        `       )
                break;
            case 3:
                basic.showLeds(`
                # . # . .
                # . # . .
                # . # . .
                # . # . .
                # . # . .
        `       )
                break;
            case 2:
                basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
        `       )
                break;
            case 1:
                basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
        `       )
                break;
        }
    }
}
