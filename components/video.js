import React from 'react'
import styles from '../styles/video.module.css'

export const BackgroundVideo = () => {
  return (
    <div className={styles.videoContainer} >
      <video src={require('../public/videos/video-ping.mp4')} className={styles.video} loop muted />
      {/* <source type="video/mp4" /> */}
    </div>
  )
}
