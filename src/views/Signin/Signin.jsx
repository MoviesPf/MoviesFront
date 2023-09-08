import { useState } from 'react'
import css from './Signin.module.css'
import { useDispatch } from 'react-redux'

export const Signin = () => {
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    name: '',
    nickname: '',
    avatar: '',
    email: '',
    password: ''
  })
  console.log(user)

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })

    // if(avatar){
    //   setUser({
    //     ...user,
    //     avatar: src
    //   })
    // }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.name)


  }

  return (
    <div className={css.background}>
      <form
        className={css.form}
        onSubmit={handleSubmit}>

        <h1 className={css.title}>SING UP</h1>

        <div className={css.section}>

          <div className={css.formUser}>

            <div className={css.avatarUser}>
              <img className={css.avatarUserImg}
              src="src\assets\Avatars\user-removebg-preview.png" alt="avatar" />
            </div>

            <label className={css.label}>
              Name <span className={css.span}>*</span>
              <input
                onChange={handleChange}
                autoComplete='none'
                className={css.input}
                placeholder='Name'
                type='text'
                name='name' />
            </label>

            <label className={css.label}>
              Nickname <span className={css.span}>*</span>
              <input
                onChange={handleChange}
                autoComplete='none'
                className={css.input}
                placeholder='Nickname'
                type='text'
                name='nickname' />
            </label>

            <label className={css.label}>
              Email <span className={css.span}>*</span>
              <input
                onChange={handleChange}
                autoComplete='none'
                className={css.input}
                placeholder='Email'
                type='email'
                name='email' />
            </label>

            <label className={css.label}>
              Password <span className={css.span}>*</span>
              <input
                onChange={handleChange}
                autoComplete='none'
                className={css.input}
                placeholder='Password'
                type='password'
                name='password'
              />
            </label>

            <label className={css.label}>
              Confirm Password <span className={css.span}>*</span>
              <input
                onChange={handleChange}
                autoComplete='none'
                className={css.input}
                placeholder='Confirm Password'
                type='password'
                name='confirm password' />
            </label>

          </div>
        </div>

        <div className={css.containBtn}>
          <div className={css.policy}>
            <input
              className={css.checkbox}
              type="checkbox"
              name="policy" />
            <p>I agree to the Terms and Privacy Policy</p>
          </div>

          <button className={css.btn}>Sign up</button>

        </div>

        <div className={css.sectionAvatar}>

          <p className={css.titleAvatar}>Choose your avatar</p>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\caballo-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\conejo-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\cuerpo-gato-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\cuerpo-mono-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\cuerpo-oso-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\cuerpo-perro-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\cuerpo-rinoceronte-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\cuerpo-zorro-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\elefante-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\gato-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\leon-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\oso-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\tigre-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\unicornio-removebg-preview.png" alt="avatar" />
          </div>

          <div className={css.avatarContainer}>
            <img className={css.avatarImg} src="src\assets\Avatars\zorro-removebg-preview.png" alt="avatar" />
          </div>

        </div>
      </form>
    </div>
  )
}
