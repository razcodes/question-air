import React from "react";

const Answer = props => {
    return(
        <label htmlFor={`radio-${props.i + 1}`} className="btn-radio">
            <input type="radio" id={`radio-${props.i + 1}`} name="radio-group"/>
            <svg width="100px" heigth="100px" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="20"></circle>
                <path d="M50,45 C47.23857625,45 45,47.23857625 45,50 C45,52.76142375 47.23857625,55 50,55 C52.76142375,55 55,52.76142375 55,50 C55,47.23857625 52.76142375,45 50,45 Z" className="inner"></path>
                <path d="M50,30 C38.954305,30 30,38.954305 30,50 C30,61.045695 38.954305,70 50,70 C61.045695,70 70,61.045695 70,50 C70,38.954305 61.045695,30 50,30 Z" className="outer"></path>
            </svg>
            <span>{props.answer}</span>
        </label>        
    )
}

{
    // M50,40 C44.4771525,40 40,44.4771525 40,50 C40,55.5228475 44.4771525,60 50,60 C55.5228475,60 60,55.5228475 60,50 C60,44.4771525 55.5228475,40 50,40 Z -->centered works
    //M50,39 C43.92486775,39 39,43.92486775 39,50 C39,56.07513225 43.92486775,61 50,61 C56.07513225,61 61,56.07513225 61,50 C61,43.92486775 56.07513225,39 50,39 -->centered works
    // M50,43.5 C46.639718625,43.5 43.5,46.639718625 43.5,50 C43.5,53.360281375 46.639718625,56.5 50,56.5 C53.360281375,56.5 56.5,53.360281375 56.5,50 C56.5,46.639718625 53.360281375,43.5 50,43.5-->centered works
    // M50,30 C38.954305,30 30,38.954305 30,50 C30,61.045695 38.954305,70 50,70 C61.045695,70 70,61.045695 70,50 C70,38.954305 61.045695,30 50,30 Z ---> centered circle
    // M50,44 C46.764718625,44 44,46.764718625 44,50 C44,53.235281375 46.764718625,56 50,56 C53.235281375,56 56,53.235281375 56,50 C56,46.764718625 53.235281375,44 50,44 -centered
    // M12.5,7.5 C9.764718625,7.5 7.5,10.014718625 7.5,12.5 C7.5,14.9852813 9.764718625,17.5 12.5,17.5 C14.9852813,17.5 17.5,15.2352813 17.5,12.5 C17.5,10.014718625 15.2352813,7.5 12.5,7.5 Z
    // M50,45 C47.264718625,45 45,47.264718625 45,50 C45,52.735281375 47.264718625,55 50,55 C52.735281375,55 55,52.735281375 55,50 C55,47.264718625 52.735281375,45 50,45 Z - centered
    // M50,40 C45.029438,40 40,45.029438 40,50 C40,54.9705626 45.029438,60 50,60 C54.9705626,60 60,54.9705626 60,50 C60,45.029438 54.9705626,40 50,40 Z --> 3x centered
    // M60,42 C50.0588745,42 42,50.0588745 42,60 C42,69.9411252 50.0588745,78 60,78 C69.9411252,78 78,69.9411252 78,60 C78,50.0588745 69.9411252,42 60,42 Z --> 6x wide
    // M50,30 C40.0588745,30 30,40.0588745 30,50 C30,59.9411252 40.0588745,70 50,70 C59.9411252,70 70,59.9411252 70,50 C70,40.0588745 59.9411252,30 50,30 Z --> 6x centered
    /* <label className="answer-container">
                            <input className="question-answer" type="radio" key={i} name="answer" defaultValue={answer}/>
                        {answer}
                        </label> */}

export default Answer;