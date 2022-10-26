import React, { SyntheticEvent } from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

class HelloClassComponent extends React.Component<Props, State> {
    state = { currentEnthusiasm: this.props.enthusiasmLevel || 1};

    onIncrement = (event: SyntheticEvent) => {
        console.log(event);
        this.updateEnthusiasm(1);
    }

    onDecrement = (event: SyntheticEvent) => {
        console.log(event.target);
        this.updateEnthusiasm(-1);
    }

    render() {
        const {name} = this.props;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error("You could be a little more enthusiastic. :D");
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }

    updateEnthusiasm(change: number) {
        this.setState((currentState) => {
            return { currentEnthusiasm: currentState.currentEnthusiasm + change };
        })
    }

    handleClick() {
        console.log('clicked');
    }
}

export default HelloClassComponent;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join("!");
}


// // loop study
// function forLoop() {
//     const numbers = [1,2,3,4,5];
//     const tens = [];

//     for (let index = 0; index < numbers.length; index++) {
//         const number = numbers[index];
//         tens.push(number *10);
//     }

//     console.log(tens);
// }

// function forEach() {
//     const numbers = [1,2,3,4,5];
//     const tens: number[] = [];

//     numbers.forEach(function (number) {
//         tens.push(number * 10);
//     })

//     console.log(tens);
// }

// function arrayMap() {
//     const numbers = [1,2,3,4,5];
    
//     const tens = numbers.map(function (number) {
//         return number * 10;
//     });

//     console.log(tens);
// }

// function mapArrow() {
//     const numbers = [1,2,3,4,5];
//     const tens = numbers.map((number) => number * 10);
//     console.log(tens);
// }

