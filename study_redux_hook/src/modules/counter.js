import { createAction, handleActions } from "redux-actions";
/**
 * Step1 액션 타입 지정
 */
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/**
 * Step2 액션 생성 함수 만들기
 * createAction으로 간단하게 액션 생성 함수 만들기
 */
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

/**
 * Step3 초기 상태 정의
 */
const initialState = {
  number: 0,
};

/**
 * Step4 리듀서 정의
 */
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
