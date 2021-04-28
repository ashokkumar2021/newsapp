import About from '../modals/About';
import dbConnect from '../db';
import Image from 'next/image'
import styles from '../styles/about.module.css'
const about = ({abouts}) => {
      return (
        <div>
            <div className={styles.about}>
          <h1>About Me</h1>
          {abouts.map(about => (
            <div key={about._id} className={styles.profile}>
            <Image src={about.profile_image} height={200} width={200} />
            <h1>{about.name}</h1>
            <h2>{about.position}</h2>
            <p>{about.description}</p>
            </div>
        ))}</div>
        </div>
    )
}

export async function getServerSideProps() {
   await dbConnect()
  const res = await About.find({})
  const abouts = res.map((doc) => {
    const about = doc.toObject()
    about._id = about._id.toString()
    return about
  })
  return {
      props : { abouts },
}
}
export default about
