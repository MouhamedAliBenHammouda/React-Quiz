import { useState,useCallback } from "react";
import Questions from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz(){
    const [UserAnswers,setUserAnswers]=useState("");

    const activeQuestionIndex = UserAnswers.length;
    const quizIzComplete = activeQuestionIndex === Questions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer (SelectAnswer){
        setUserAnswers((prev)=>{
            return [...prev,SelectAnswer]
        });
    },[]);

    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]);

    if(quizIzComplete){
        return <Summary UserAnswers={UserAnswers}/>
    }
    return (
        <div id="quiz">
            <div id="question">
                <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
                />
            </div>
        </div>
        )

}