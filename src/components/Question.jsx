import QuestionTimer from "./QuestionTimer";
import Answer from "./Answers";
import QUESTIONS from "../questions.js";
import { useState } from "react";

export default function Question({index,onSelectAnswer,onSkipAnswer}){
    const [answer,setAnswer]=useState({
        selectedAnswer:'',
        isCORRECT:null
    });
    let timer=10000;

    if(answer.selectedAnswer){
        timer=1000;
    }
    if(answer.isCORRECT!==null){
        timer=2000;
    }
    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer:answer,
            isCORRECT:null
        })
        setTimeout(()=>{
            setAnswer({
                selectedAnswer:answer,
                isCORRECT:QUESTIONS[index].answers[0]===answer,
            })
            setTimeout(()=>{
                onSelectAnswer(answer);
            },2000);
        },1000)
    }
    let answerState ="";
    if(answer.selectedAnswer && answer.isCORRECT !==null){
        answerState=answer.isCORRECT?'correct':'wrong';
    }else if(answer.selectedAnswer){
        answerState="answered";
    }
    return (
        <div id="question">
                <QuestionTimer 
                key={timer}
                timeout={timer} 
                onTimeout={answer.selectedAnswer===''?onSkipAnswer:null} 
                mode={answerState}
                />
                <h2>{QUESTIONS[index].text}</h2>
                <Answer 
                answers={QUESTIONS[index].answers} 
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
                />
        </div>
    )
}