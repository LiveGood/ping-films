import React from 'react'
import styles from '../styles/video.module.css'

export const BackgroundVideo = () => {
  return (
    <div className={styles.videoContainer} >
      <video src={require('../public/videos/video-ping.mp4')} className={styles.video} loop muted autoPlay />
      {/* <source type="video/mp4" /> */}
      <div className={styles.centerTitle}>
        We provide cinematic solutions to all<br/>
        who value emotion, original storytelling and<br/>
        natural movement. 
      </div>
    </div>
  )
}
