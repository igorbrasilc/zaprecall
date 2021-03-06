import React from 'react';
import TurnoverIcon from '../../assets/setinha.png';


export default function QuestionOpened(props) {
    const {question, answer, callback} = props;

    const [selected, setSelected] = React.useState(false);

    return selected === false ? (
        <article className="article-question">
            <p>{question}</p>
            <img src={TurnoverIcon} alt="turnover-icon" onClick={() => setSelected(true)} />
        </article>  
    ) : (
        <article className="article-question">
            <p>{answer}</p>
            <div className="btns-answer">
                <button className="btn-didnt-remember" onClick={(color) => callback("red")}>Não lembrei</button>
                <button className="btn-remembered" onClick={(color) => callback("yellow")}>Quase não lembrei</button>
                <button className="btn-zap" onClick={(color) => callback("green")}>Zap!</button>
            </div>
        </article>  
    )
}