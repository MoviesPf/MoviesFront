import style from './Welcome.module.css'

const Welcome = () => {
 return (
  <div className={style.container}>
     <div className={style.contain}>
        <h1 className={style.title}>💚 WELCOME TO THE ADMIN DASHBOARD 🤩</h1>
        <p className={style.intro}>We're thrilled to have you here as an administrator of our system. Your access to this dashboard will provide you with full control over our operations and data. Here, you can monitor, manage, and optimize all essential functions of our platform.</p>
        <p className={style.complemento}>Feel free to explore all the tools and options available. We're here to provide you with all the support you need to carry out your work efficiently and effectively. Remember that your role as an administrator is crucial in keeping our system running smoothly and ensuring the best experience for our users. </p>
        <p className={style.thanks}>Thank you for being a part of our team and for your dedication to making our system even better. Let's go ahead and start working together!</p>
      </div>
  </div>
 )
}

export default Welcome;