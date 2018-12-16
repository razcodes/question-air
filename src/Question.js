import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Question extends Component {
    state = {
        numberOfQuestion: 0,
        questions: []
    }

    emptyOutRadios = radios => {
        // unchecks all radio buttons
        radios.forEach(el => el.checked = false);
    }

    submitAnswer = (question, answer) => {
        this.props.questions[question].response = answer;
    }

    getRadioVal = () => {
        let answer;
        // get list of radio buttons with specified name
        let radios = this.refs.answers.elements['answer']; //RadioNodeList
        radios.forEach(el => {
            (el.checked) && (answer = el.value) // sets the answer variable equal to the value of the checked by the user radio
        });

        this.emptyOutRadios(radios);
        this.submitAnswer(this.state.numberOfQuestion, answer);

        this.checkAnswer(answer); // the answer submitted by the user (string)
    }

    changeQuestion = () => {
        console.log(this.state.numberOfQuestion);
        this.setState( prevState => ({
            numberOfQuestion: prevState.numberOfQuestion + 1
        }));
        console.log(this.state.numberOfQuestion);
    }

    checkAnswer = answer => {
        // checks value of radios against correct answer and updates score and/or removes question
        (answer === this.props.questions[this.state.numberOfQuestion].answer) && this.props.increaseScore();
        
        this.changeQuestion();
    } 

    render() {
        const {questions} = this.props // unpack question from state object
        const {numberOfQuestion} = this.state;
        return(                
            questions.length > 0 ?
            <div className="question-container">
                <p>{this.props.score}</p> 
                <h1 className="question">{questions[numberOfQuestion].question}</h1>
                <form className="answers" ref="answers">
                    {questions[numberOfQuestion].answersArray.map((answer, i) => {
                    return (
                    <label>
                        <input className="ans" type="radio" key={i} name="answer" defaultValue={answer}/>
                    {answer}
                    </label>
                    )                
                })}
                </form>
                {questions.length === numberOfQuestion + 1 ? <Link className="answer-btn2" onClick={this.getRadioVal} to="/results">Submit Answer and See Results</Link> : <button className="answer-btn" onClick={this.getRadioVal}>Submit Answer</button>}
            </div> : <h1>Please Enter a Question!</h1>            
        )
        // return (
        //  <div className="question-container">
        //      <h1 className="question">Question</h1>
        //        <form className="answers" onChange={this.handleAnswer}>
        //            {['Answer1', 'Answer2', 'Answer3', 'Answer4'].map((answer, i) => {
        //                return (
        //                <label>
        //                    <input className="ans" type="radio" key={i} name="answer"/>
        //                {answer}</label>
        //                )
        //            })}
        //        </form>
        //        <button className="answer-btn" onClick={this.getRadioVal}>Submit Answer</button>        
        //    </div>
        // )
    }
}

export default Question;