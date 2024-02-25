import { useEffect, useState } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification /Notification ";

const feedbackDefault = {
    good: 0,
    neutral: 0,
    bad: 0,
};

const feedbackStart = () => {
    const savedFeedback = window.localStorage.getItem("feedbackData");
    return savedFeedback !== null ? JSON.parse(savedFeedback) : feedbackDefault;
};

export default function App() {
    const [feedback, setFeedback] = useState(feedbackStart);

    useEffect(() => {
        window.localStorage.setItem("feedbackData", JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = (key) => {
        setFeedback({
            ...feedback,
            [key]: feedback[key] + 1,
        });
    };

    const resetFeedback = () => {
        setFeedback(feedbackDefault);
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positive = Math.round(
        ((feedback.good + feedback.neutral) / totalFeedback) * 100
    );

    return (
        <>
            <Description />
            <Options
                totalFeedback={totalFeedback}
                onUpdate={updateFeedback}
                onReset={resetFeedback}
            />
            {totalFeedback > 0 ? (
                <Feedback
                    feedback={feedback}
                    totalFeedback={totalFeedback}
                    positive={positive}
                />
            ) : (
                <Notification />
            )}
        </>
    );
}
