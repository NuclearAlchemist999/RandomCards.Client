export interface ICard {
    cardId: string
    cardName: string
}

export interface HandInfo {
    gameId: string
    handId: string
    cards: ICard[]
}

export type GetHandResponse = HandInfo | null