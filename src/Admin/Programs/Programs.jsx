import style from './Programs.module.css'
import { FaUsers, FaUsersSlash, FaRankingStar } from 'react-icons/fa6'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProgramsAdmin } from '../../Redux/actions'
import { Cards } from '../../Components/Cards/Cards'
import { Filters } from '../../Components/Filters/Filters'

const Programs = () => {
  const dispatch = useDispatch()
  const programsAdmin = useSelector((state) => state.allPrograms)
  console.log(programsAdmin)
  const info = useSelector((state) => state.programsInfo)
  console.log(info)

  const programs = useSelector((state) => state.programs);
  const filteredPrograms = useSelector((state) => state.filteredPrograms);

  useEffect(() => {
    dispatch(getProgramsAdmin())
  }, [dispatch])


  return (
    <div className={style.container}>

      <div className={style.containTitle}>
        <h1 className={style.titlePrincipal}>programs administration</h1>
        <p className={style.text}>This will be your central tool for effectively managing and monitoring program information within our software. From here, you will have access to program-related information, user reviews and a program creation form.</p>
      </div>

      <h1 className={style.titleTable}>Total information related to programs</h1>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.info}>
            <FaUsers className={style.icon} />
            <span className={style.infoTitle}>{info.total}</span>
          </div>
          <span className={style.cardTitle}>TOTAL PROGRAMS</span>
        </div>

        <div className={style.card}>
          <div className={style.info}>
            <FaUsersSlash className={style.icon} />
            <span className={style.infoTitle}>{info.totalMovies}</span>
          </div>
          <span className={style.cardTitle}>TOTAL MOVIES</span>
        </div>

        <div className={style.card}>
          <div className={style.info}>
            <BiSolidDonateHeart className={style.icon} />
            <span className={style.infoTitle}>{info.totalSeries}</span>
          </div>
          <span className={style.cardTitle}>TOTAL SERIES</span>
        </div>

        <div className={style.card}>
          <div className={style.info}>
            <FaRankingStar className={style.icon} />
            <span className={style.infoTitle}>{info.bannedPrograms}</span>
          </div>
          <span className={style.cardTitle}>TOTAL BANNED</span>
        </div>
      </div>

      <h1 className={style.titleTable}>All programs uploaded on our website</h1>
      <div className={style.programsContainer}>
      <Filters/>
      <Cards className={style.programs}
            programs={
              filteredPrograms.data ? filteredPrograms.data : programs.data
            }
            total={
              filteredPrograms.data ? filteredPrograms.total : programs.total
            }
          />
      </div>

    </div>
  )
}

export default Programs;