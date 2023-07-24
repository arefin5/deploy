// import PropTypes from "prop-types";
// import BaseReactMediaRecorder from "react-media-recorder";

// export default class ReactMediaRecorder extends BaseReactMediaRecorder {


//   initMediaRecorder = stream => {
//     const { mediaRecorderOptions } = this.props;
//     const mediaRecorder = new MediaRecorder(stream, mediaRecorderOptions);
//     mediaRecorder.ondataavailable = this.onRecordingActive;
//     mediaRecorder.onstop = this.onRecordingStop;
//     mediaRecorder.onerror = () => this.setState({ status: "recorder_error" });
//     return mediaRecorder;
//   };
// }

// ReactMediaRecorder.defaultProps = {
//   ...BaseReactMediaRecorder.defaultProps,
//   mediaRecorderOptions: null
// };

// ReactMediaRecorder.propTypes = {
//   mediaRecorderOptions: PropTypes.object
// };
