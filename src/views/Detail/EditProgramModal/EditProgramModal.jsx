import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePrograms, patchPrograms } from "../../../Redux/actions";
import { HiOutlinePencilAlt } from 'react-icons/hi'
import style from './EditProgramModal.module.css'

const EditProgramModal = () => {
  const dispatch = useDispatch()

  const programDetail = useSelector((state) => state.programDetail);
  console.log(String(programDetail.id))

  const [modal, setModal] = useState(false)

  useEffect(() => {
    setEditedProgram({
      id: String(programDetail.id),
      title: programDetail.title,
      overview: programDetail.overview,
      release_date: programDetail.release_date,
      backdrop: programDetail.backdrop,
      poster: programDetail.poster,
      runtime: programDetail.runtime,
      adult: programDetail.adult,
      type: programDetail.type,
      seasons: programDetail.seasons,
      episodes: programDetail.episodes,
      banned: programDetail.banned
    })
  }, [programDetail])

  const [editedProgram, setEditedProgram] = useState({
    id: String(programDetail.id),
    title: programDetail.title,
    overview: programDetail.overview,
    release_date: programDetail.release_date,
    backdrop: programDetail.backdrop,
    poster: programDetail.poster,
    runtime: programDetail.runtime,
    adult: programDetail.adult,
    type: programDetail.type,
    seasons: programDetail.seasons,
    episodes: programDetail.episodes,
    banned: programDetail.banned
  })


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(editedProgram)
    dispatch(patchPrograms(editedProgram))
    setModal(false)
  }

  const handleChange = (event) => {
    setEditedProgram({
      ...editedProgram,
      [event.target.name]: event.target.value
    })
  }


  return (
    <div className={style.container}>
      <div className={style.btnEdit} onClick={() => setModal(true)}>
        <HiOutlinePencilAlt />
      </div>

      {modal ?
        <div className={style.modal}>
          <div className={style.modalContainer}>
            <form className={style.form} onSubmit={handleSubmit}>

              <div className={style.containerTitle}>
                <label className={style.label}>Title
                  <input
                    onChange={handleChange}
                    className={style.input}
                    name="title"
                    value={editedProgram.title}
                    type="text" />
                </label>
              </div>

              {/* <div className={style.containerLabel}>
                <label className={style.label}>Backdrop
                  <input
                    onChange={handleChange}
                    className={style.input}
                    name="backdrop"
                    value={editedProgram.backdrop}
                    type="text" />
                </label>
              </div>

              <div className={style.containerLabel}>
                <label className={style.label}>Poster
                  <input
                    onChange={handleChange}
                    className={style.input}
                    name="poster"
                    value={editedProgram.poster}
                    type="text" />
                </label>
              </div> */}

              <div className={style.containerLabel}>
                <label className={style.label}>Release Date
                  <input
                    onChange={handleChange}
                    className={style.inputDate}
                    name="release_date"
                    value={editedProgram.release_date}
                    type="date" />
                </label>
              </div>

              <div className={style.containerLabel}>
                <label className={style.label}>Runtime
                  <input
                    onChange={handleChange}
                    className={style.inputNumber}
                    name="runtime"
                    value={editedProgram.runtime}
                    type="number" />
                </label>
              </div>

              <div className={style.containerLabel}>
                <label className={style.label}>Adult
                  <select className={style.select} defaultValue={String(editedProgram.adult)}>
                    <option>{String(editedProgram.adult)}</option>
                    <option>{String(!editedProgram.adult)}</option>
                  </select>
                </label>
              </div>

              {programDetail.seasons ?
                <div className={style.containerLabel}>
                  <label className={style.label}>Seasons
                    <input
                      onChange={handleChange}
                      className={style.inputNumber}
                      name="seasons"
                      value={editedProgram.seasons}
                      type="number" />
                  </label>
                </div> : ''
              }

              {programDetail.seasons ?
                <div className={style.containerLabel}>
                  <label className={style.label}>Episodes
                    <input
                      onChange={handleChange}
                      className={style.inputNumber}
                      name="episodes"
                      value={editedProgram.episodes}
                      type="number" />
                  </label>
                </div> : ''
              }

              <div className={style.containerLabel}>
                <label className={style.labelOverview}> Overview
                  <textarea
                    onChange={handleChange}
                    className={style.textarea}
                    name="overview"
                    type='text'
                  >{programDetail.overview}</textarea>
                </label>
              </div>

              <div className={style.containbtn}>
                <div onClick={() => setModal(false)} className={style.cancel}>
                  Cancel
                </div>

                <button className={style.btnChanges} type="submit">Accept the changes</button>
              </div>
            </form>
          </div>
        </div >
        : ''
      }

    </div >
  )
}

export default EditProgramModal;