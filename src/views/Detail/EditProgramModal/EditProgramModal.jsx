import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePrograms } from "../../../Redux/actions";
import {HiOutlinePencilAlt} from 'react-icons/hi'
import style from './EditProgramModal.module.css'

const EditProgramModal = () => {
  const dispatch = useDispatch()

  const programDetail = useSelector((state) => state.programDetail);

  const [editedProgram, setEditedProgram] = useState({
    title: programDetail.title,
    // overview,
    // release_date,
    // backdrop,
    // poster,
    // runtime,
    // adult,
    // revenue,
    // budget,
    // cast,
    // popularity,
    // type,
    // banned
  })

  const handleClickBanned = () => {
    dispatch(deletePrograms(programDetail.id))
  }


  return (
    <div>
      <div className={style.btnEdit}>
        <HiOutlinePencilAlt/>
      </div>



      
    </div>
  )
}

export default EditProgramModal;