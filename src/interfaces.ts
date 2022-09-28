export interface ICard {
    cardId: string
    cardName: string
}

export interface HandInfo {
    gameCardCount: number
    gameId: string
    handId: string
    cards: ICard[]
}

export interface ThrowCardsRequest {
    gameId: string
    cardIds: string[]
    previousHandId: string 
}

export interface HistoryResponse {
    historyItems: HandInfo[]
}

export type GetHandResponse = HandInfo | null