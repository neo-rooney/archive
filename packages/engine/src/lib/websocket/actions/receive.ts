/**
 * 서버가 받는 메세지
 * GetIdAction : 사용자가 처음 접속하는 경우 id를 서버로 보냄
 * ReuseIdAction : 사용자가 재 접속하는 경우 원래 사용하던 id를 그대로 사용 할 수 있게 해줄것, id의 주인이 맞는지 확인하기 위해 token 추가로 서버로 보내는 것
 */

type GetIdAction = {
  type: 'getId'
}

type ReuseIdAction = {
  type: 'reuseId'
  id: string
  token: string
}

type SubscribeAction = {
  type: 'subscribe'
  key: string
}

type UnsubscribeAction = {
  type: 'unsubscribe'
  key: string
}

const actionTypes = ['getId', 'reuseId', 'subscribe', 'unsubscribe']

export type ReceiveAction =
  | GetIdAction
  | ReuseIdAction
  | SubscribeAction
  | UnsubscribeAction

export function isReceiveAction(obejct: any): obejct is ReceiveAction {
  if (!obejct?.type) return false
  return actionTypes.includes(obejct.type)
}
