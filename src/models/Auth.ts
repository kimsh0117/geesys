// configuration data type model when success auth api

interface Messages {
  template: string
}

export interface AuthModel {
  accessToken: string
  tokenId: number
  userId: number
  messages: Messages[]
}
