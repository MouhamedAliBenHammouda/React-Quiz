import { useRef } from "react";
export default function Answer({answers,selectedAnswer,answerState,onSelect}){
    const shuffledAnswers = useRef();
    if(!shuffledAnswers.current){

        shuffledAnswers.current =[...answers];
        shuffledAnswers.current.sort(()=>Math.random()-0.5);
    
    }

    return (
<ul id="answers">
                    {shuffledAnswers.current.map((answer,index)=>
                    {

                        const isSelected = selectedAnswer===answer;
                        let cssClasse="";
                        if(answerState==="answered"&&isSelected){
                            cssClasse="selected";
                        }

                        if((answerState==="correct"||answerState==="wrong")&&isSelected){
                            cssClasse=answerState;
                        }
                        return <li key={index} className="answer">
                        <button 
                        onClick={()=>onSelect(answer)} 
                        className={cssClasse} 
                        disabled={answerState!==""}
                        >
                            {answer}
                        </button>
                    </li>
                    }
                )}
                </ul>
    )
}