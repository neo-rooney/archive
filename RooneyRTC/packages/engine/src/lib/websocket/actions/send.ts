/**
 * 서버가 보내는 메세지
 * ConnectedAction : 연결이 된 경우 아이디와 토큰을 보내줌
 * GetIdSuccessAction : 연결이 잘 된 경우 아이디를 보내줌
 * ReuseIdSuccessAction : 재접속이 잘 된 경우
 */

type ConnectedAction = {
  type: 'connected'
  id: string
  token: string
}

type GetIdSuccessAction = {
  type: 'getIdSuccess'
  id: string
}

type ReuseIdSuccessAction = {
  type: 'reuseIdSuccess'
}

type SubscriptionMessageAction = {
  type: 'subscriptionMessage'
  message: any
}

export type SendAction =
  | ConnectedAction
  | ReuseIdSuccessAction
  | SubscriptionMessageAction

const actionCreators = {
  connected: (id: string, token: string): ConnectedAction => ({
    type: 'connected',
    id,
    token,
  }),
  getIdSuccess: (id: string): GetIdSuccessAction => ({
    type: 'getIdSuccess',
    id,
  }),
  resueIdSuccess: (): ReuseIdSuccessAction => ({
    type: 'reuseIdSuccess',
  }),
  subscriptionMessage: (message: any): SubscriptionMessageAction => ({
    type: 'subscriptionMessage',
    message,
  }),
}

export default actionCreators
