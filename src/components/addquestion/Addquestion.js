import React from "react";
import { useForm } from "react-hook-form";
import bgImg from "../../assets/bgImg.png";
import { useState } from "react";
import "./Addquestion.css";

export default function Input_form() {
  const [questionList, setQuestionList] = useState([{ question: "" }]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(questionList);
  // console.log(watch("username"));

  // const passQuestionList =(e,questionList) =>{
  //   const questions = [...questionList];
  //   {...register["questions"]}
  // }
  const handlequestionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...questionList];
    list[index][name] = value;
    setQuestionList(list);
  };

  const handlequestionRemove = (index) => {
    const list = [...questionList];
    list.splice(index, 1);
    setQuestionList(list);
  };

  const handlequestionAdd = () => {
    setQuestionList([...questionList, { question: "" }]);
  };

  return (
    <section>
      <div className="register">
        {/* <div className="col-2">
          <img src={bgImg} alt="" />
        </div> */}

        <div className="col-1">
          <h2>Admin Panel</h2>
          <span>Add Questions and Answer to train the BOT</span>

          <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("tag")}
              placeholder="Enter Tag Name"
              required
            />

            {questionList.map((singlequestion, index) => (
              <div key={index} className="questions">
                <input
                  name="question"
                  type="text"
                  id="question"
                  placeholder="Enter Question Here!!"
                  value={singlequestion.question}
                  onChange={(e) => handlequestionChange(e, index)}
                  required
                />

                {questionList.length - 1 === index && questionList.length < 5 && (
                  <button
                    type="button"
                    onClick={handlequestionAdd}
                    className="add-btn"
                  >
                  Add
                  </button>
                )}
                {questionList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handlequestionRemove(index)}
                    className="remove-btn"
                  >
                  Remove
                  </button>
                )}
              </div>
            ))}

            <input
              type="text"
              {...register("responses")}
              placeholder="Write Answer Here!!"
              required
            />

            {/* {errors.mobile?.type === "required" && "Mobile Number is required"}
                {errors.mobile?.type === "maxLength" && "Max Length Exceed"} */}
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
