import { useState } from "react";

const EditProgramModal = () => {

  const user = JSON.parse(localStorage.getItem('userStorage'));
  console.log(user)

  const [editedProgram, setEditedProgram] = useState({
    
  })


  return (
    <div>

    </div>
  )
}

export default EditProgramModal;