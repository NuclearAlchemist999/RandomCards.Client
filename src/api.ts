import { toast } from "react-toastify"
import { GetHandResponse, HistoryResponse, ThrowCardsRequest } from "./interfaces"

export const getHand = async () => {
    try {
        const response = await fetch('https://localhost:7265/api/games')
        return await response.json() as GetHandResponse
    } catch (err) {
        toast.error('Failed to get cards.')
    }
}

export const throwCards = async (request: ThrowCardsRequest)  => {
    try {
        const response = await fetch(`https://localhost:7265/api/games/${request.gameId}/hands`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(request)
        });
        return await response.json() as GetHandResponse
    } catch (err) {
        toast.error('Failed to get cards.')
    }
}

export const getHistory = async () => {
    try {
        const response = await fetch('https://localhost:7265/api/games/history')
        return await response.json() as HistoryResponse
    } catch (err) {
        toast.error('Failed to get game history.')
    }
}