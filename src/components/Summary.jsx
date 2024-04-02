import quizCompleteImg from "../assets/quiz-complete.png"
import QUESTIONS from "../questions.js";

export default function  Summary({UserAnswers}){
    const skippedAnswers = UserAnswers.filter(answer=>answer===null);
    const correctAnswers = UserAnswers.filter((answer,index)=>answer ===QUESTIONS[index].answers[0]);


    const skippedAnswersShare=Math.round((skippedAnswers.length /UserAnswers.length)*100);
    const correctAnswersShare=Math.round((correctAnswers.length /UserAnswers.length)*100);
    const wrongAnswerShare=100-skippedAnswersShare-correctAnswersShare;
    return <div id="summary">
        <img src={quizCompleteImg} />
        <h2>Quie Completed!</h2>
        <div id="summary-stats">
        <p>
            <span className="number">{skippedAnswersShare}%</span>
            <span className="text">skipped</span>
        </p>
        <p>
            <span className="number">{correctAnswersShare}%</span>
            <span className="text">answered correctly</span>
        </p>
        <p>
            <span className="number">{wrongAnswerShare}%</span>
            <span className="text">answered inCorrectly</span>
        </p>
        </div>
        <ol>
            {UserAnswers.map((answer,index)=>{
                let cssClass='user-answer'

                if(answer===null){
                    cssClass+= ' skipped';
                }else if(answer ===QUESTIONS[index].answers[0]){
                    cssClass +=" correct";
                }else{
                    cssClass+=' wrong'
                }
                
                return(
                    <li key={index}>
                    <h3>{index+1}</h3>
                    <p className="question">{QUESTIONS[index].text}</p>
                    <p className={cssClass}>{answer}</p>
                </li>);
            })}
        </ol>
    </div>
}