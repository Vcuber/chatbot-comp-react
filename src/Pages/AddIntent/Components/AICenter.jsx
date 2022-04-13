import React, {useState} from 'react'
import { FormControl, InputLabel, OutlinedInput, Container, Button, TextField} from '@mui/material';
import { IconButton } from '@mui/material';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import {Row, Col} from 'react-bootstrap';

function AICenter() {

    const [questions, setQuestions] = useState([
        {question: ''}
    ]);
    
    const [responses, setResponses] = useState([
        {response: ''}
    ]);
    
      const onHandleQuestionChange = (event) => {
        const val = event.target.value;
        setQuestions({question: val});
      }
    
      const handleAddQuestion = () => {
        setQuestions([...questions, { question: '' }]);
      }
    
      const handleRemoveQuestion = (index) => {
        const values = [...questions];
        values.splice(index, 1);
        setQuestions(values);
      }
    
      const onHandleResponseChange = (event) => {
        const val = event.target.value;
        setResponses({response: val});
      }
    
      const handleAddResponse = () => {
        setResponses([...responses, { response: '' }]);
      }
    
      const handleRemoveResponse = (index) => {
        const values = [...responses];
        values.splice(index, 1);
        setResponses(values);
      }

  return (
    <div>
      <Container>
        <h5><u>Tag</u></h5>
        <FormControl margin="normal" sx={{ width: '50ch' }}>
          <InputLabel htmlFor="outlined-tag">Tag</InputLabel>
          <OutlinedInput
            id="outlined-tag"
            label="Tag"
          />
        </FormControl>
      </Container>
      <Container>
        <h5><u>Questions</u></h5>
        {questions.map((ques, index) => (
          <div key={index}>
            <TextField 
              name="questions"
              label="Questions"
              variant='outlined'
              sx = {{ width: '70%'}}
              onChange={(e) => onHandleQuestionChange(e)}
              margin="dense"
            />
            <IconButton onClick={() => handleAddQuestion()}>
              <AddCircleSharpIcon />
            </IconButton>
            {questions.length > 1 &&
              <IconButton onClick={() => handleRemoveQuestion(index)}>
                <RemoveCircleSharpIcon />
              </IconButton>
            }
          </div>
          ))}
      </Container>
      <Container>
        <h5><u>Responses</u></h5>
        {responses.map((resp, index) => (
          <div key={index}>
            <TextField 
              name="responses"
              label="Responses"
              variant='outlined'
              sx = {{ width: '70%'}}
              onChange={(e) => onHandleResponseChange(e)}
              margin="dense"
            />
            <IconButton onClick={() => handleAddResponse()}>
              <AddCircleSharpIcon />
            </IconButton>
            {responses.length > 1 &&
              <IconButton onClick={() => handleRemoveResponse(index)}>
                <RemoveCircleSharpIcon />
              </IconButton>
            }
          </div>
          ))}
      </Container>
      <br /><br />
      <Container>
        <Row>
          <Col><Button variant="contained">Save</Button></Col>
          <Col><Button variant="contained">Cancel</Button></Col>
        </Row>
      </Container>
      <br /><br />
    </div>
  )
}

export default AICenter