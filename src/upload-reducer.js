export const START_UPLOADING = 'START_LOADING';
export const SET_UPLOAD_PROGRESS = 'SET_UPLOAD_PROGRESS';
export const FINISH_UPLOADING = 'FINISH_UPLOADING';

// The possible state changes that take place during a file upload
export function reducer(state, action) {
  switch (action.type) {
    case START_UPLOADING:
      return { loading: true };
    case SET_UPLOAD_PROGRESS:
      return { ...state, progress: action.payload };
    case FINISH_UPLOADING:
      return {
        done: true,
        loading: false,
        response: action.payload,
        error: action.payload.error ? action.payload.response : false,
      };
    default:
      return state;
  }
}
