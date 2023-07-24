// import axios from 'axios';
// import React, { useState,useRef } from 'react'
// import Webcam from "react-webcam";
// import { BaseUrl } from '../../utils/constant';
// const WebCamera = () => {
//     const webcamRef = useRef(null);
//     const [capturePhoto, setCapturePhoto] = useState(null);
//     const [photo,setPhoto] = useState(null);
//     const [loading,setLoading] = useState(false);
//     const [uploading, setUploading] = useState(false);
//     const [image, setImage] = useState({});
// const onCapture = async() => {
// // console.log("camera")
// let base64 = webcamRef.current.getScreenshot();
// setCapturePhoto(base64);
// const download = document.createElement("a");
// download.href = capturePhoto;
// console.log(download.href)
// download.download = "image.png";
// // // console.log("capturePhoto")
// // let file =capturePhoto;
//     let formData = new FormData();
//     formData.append("image",download );
//     // console.log([...formData]);
//     setUploading(true);
//     try {
//       const { data } = await axios.post(BaseUrl+"/upload-image", formData);
//       console.log("uploaded image => ", "data");
//       setImage({
//         url: data.url,
//         public_id: data.public_id,
//       });
//       setUploading(false);
//     } catch (err) {
//       console.log(err);
//       setUploading(false);
//     }
// }
//   return (
//     <div>
//           <Webcam
//                 className="w-100"
//                 audio={false}
//                 screenshotFormat="image/jpeg"
//                 ref={webcamRef}
//               />
//               <button onClick={onCapture} className="btn  btn-primary mt-3 btn-lg">
//                 Capture Your Photo
// </button>
//     </div>
//   )
// }
// export default WebCamera


import React, {useEffect} from "react";
import Webcam from "react-webcam";
import axios from 'axios';
import {BaseUrl} from '../../utils/constant';
import { FilePond, File, registerPlugin } from 'react-filepond'

 const WebcamStreamCapture = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
    const [videoSrc, setVideoSrc] = React.useState(null);
    const isInitialMount = React.useRef(true);
    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        if (!capturing) {
          // console.log('running handleDownload')
          handleDownload();
        }
      }
    }, [capturing])
    const handleStartCaptureClick = React.useCallback(() => {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);


    const handleDataAvailable = React.useCallback(
      ({ data }) => {
        if (data.size > 0) {
          setRecordedChunks((prev) => prev.concat(data));
        }
      },
      [setRecordedChunks]
    );

    const handleStopCaptureClick = React.useCallback(() => {
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);
        const handleDownload = React.useCallback(() => {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"
        });
        const url = URL.createObjectURL(blob);
          console.log(url)
        // let file=blob;
        const formData = new FormData();
        formData.append("file", blob);
      }
    }, [recordedChunks]);
    return (
         <>
        <div className="row">
          <div className="col-md-4">
           <div className="text-center">
        <Webcam audio={false} ref={webcamRef} />
        <video id="video-replay" height="200" width="200" controls></video>
        {/* {capturing ? (
          <button className="btn btn-danger" onClick={handleStopCaptureClick}>Stop Capture</button>
        ) : (
          <button className="btn btn-danger" onClick={handleStartCaptureClick}>Start Capture</button>
        )} */}
        
      </div>
      </div>
          </div>
         </>
    )
}

export default WebcamStreamCapture ;