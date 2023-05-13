import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = () => {
    return (
        <>
            <CounterResult/>
            <CounterButton calcType="+" step={2}/>
            <CounterButton calcType="-" step={2}/>
            <CounterButton calcType="+" step={10}/>
            <CounterButton calcType="-" step={10}/>
        </>
    )
}
export default Counter;