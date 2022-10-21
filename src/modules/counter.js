/**
 * Step1 액션 타입 지정
 */
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/**
 * Step2 액션 생성 함수 만들기
 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/**
 * Step3 초기 상태 정의
 */
const initialState = {
  number: 0,
};

/**
 * Step4 리듀서 정의
 */
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
