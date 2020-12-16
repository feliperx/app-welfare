import React, { useState } from "react";


import perfil2 from '../../../images/perfil2.png'
import perfil3 from '../../../images/perfil3.png'

import InstructorList from "./components/InstructorList";
import Conversation from "./components/Conversation";

export default function Chats() {
  const [ instructor, setInstructor ] = useState(null)

  const instructors = [{
    avatar: perfil2,
    name: "Marlon Belo",
    activity: "Aerobico",
    hour: "12:00"
  },
  {
    avatar: perfil3,
    name: "Felipe Xaud",
    activity: "malhação",
    hour: "12:00"
  }]


  return (
    <>
      {instructor === null ? (
        <InstructorList instructors={instructors} setInstructor={setInstructor} />
      ) : (
        <Conversation instructor={instructor} setInstructor={setInstructor} />
      )}
     
    </>
  );
};
