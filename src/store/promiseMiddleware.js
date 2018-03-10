// import { ERROR } from '../components/app/reducers';

const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => action => {
  const { type, payload } = action;
  if(!isPromise(payload)) return next(action);

  return payload
    .then(
      result => {
        dispatch({
          type,
          payload: result
        });

      },
      err => {
        // dispatch({ type: ERROR, payload: err });
        throw err;
      }
    );
};