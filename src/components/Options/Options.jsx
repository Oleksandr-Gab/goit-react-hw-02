import css from "./Options.module.css";

export default function Options({ totalFeedback, onUpdate, onReset }) {
    return (
        <div className={css.btnContainer}>
            <button onClick={() => onUpdate("good")}>Good</button>
            <button onClick={() => onUpdate("neutral")}>Neutral</button>
            <button onClick={() => onUpdate("bad")}>Bad</button>
            {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
        </div>
    );
}
