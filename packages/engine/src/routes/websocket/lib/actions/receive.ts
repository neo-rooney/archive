/**
 * actions that server receive
 * 사용자가 처음 접속하는 경우 id와 해당 id에 맞는 토큰을 발급해줄것
 * 사용자가 재 접속하는 경우 원래 사용하던 id를 그대로 사용 할 수 있게 해줄것
 * id의 주인이 맞는지 확인하기 위해 token을 사용하는 것
 */

type GetIdAction = {
  type: 'getId'
}

type ReuseIdAction = {
  type: 'reuseId'
  id: string
  token: string
}

const actionTypes = ['getId', 'reuseId']

export type ReceiveAction = GetIdAction | ReuseIdAction

export function isReceiveAction(obejct: any): obejct is ReceiveAction {
  if (!obejct?.type) return false
  return actionTypes.includes(obejct.type)
}
