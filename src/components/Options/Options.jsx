export default function Options({ totalFeedback, onUpdate, onReset }) {
    return (
        <>
            <button onClick={() => onUpdate("good")}>Good</button>
            <button onClick={() => onUpdate("neutral")}>Neutral</button>
            <button onClick={() => onUpdate("bad")}>Bad</button>
            {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
        </>
    );
}
