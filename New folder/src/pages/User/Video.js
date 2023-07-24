import React from 'react'
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'

const Video = () => (
  <VideoRecorder
    onRecordingComplete={(videoBlob) => {
      // Do something with the video...
      console.log('videoBlob', videoBlob)
    }}
  />
)