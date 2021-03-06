import React from 'react';
import axios from 'axios';

class Question extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            question : null
        };
    }

     componentDidMount= async ()=>{
        const { match: { params } } = this.props;
        const question = ( await axios.get(`http://localhost:3000/${params.questionId}`)).data;
        this.setState({
            question,
        });
    }

    render() {
        const {question} = this.state;
        if(question === null) return <p>Loading....</p>;

        return (
            <div className="container">
                <div className="row">
                <div className="jumbotron col-12">
                    <h1 className="display-3">{question.title}</h1>
                    <p className="lead">{question.description}</p>
                    <hr className="my-4" />
                    <p>Answers:</p>
                    {
                    question.answers.map((answer, idx) => (
                        <p className="lead" key={idx}>{answer.answer}</p>
                    ))
                    }
                </div>
                </div>
            </div>
        );
    }
}   

export default Question;