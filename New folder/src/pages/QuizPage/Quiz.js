
import React, { Fragment } from 'react'
import Questions from '../../Components/Questions'
// import {questions} from '../../constant/data'
import {useQuestionContext} from '../../context/QuestionContext'
import WebcamStreamCapture from '../User/WebCamera'
const Quiz = () => {
  const {allQuestion,questions_loading} = useQuestionContext()
  // console.log(allQuestion);
  return questions_loading ? (<>
    <div>
      <h2>loading............</h2>
    </div>
  </>):
    (<>
        <div className='container'>
            <div className='col-lg-12'>
                <div className='home'>
                  <WebcamStreamCapture/>
                    <Questions questions={allQuestion}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Quiz