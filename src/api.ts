import { toast } from "react-toastify"
import { GetHandResponse, HistoryResponse, ThrowCardsRequest } from "./interfaces"

const baseURL = 'https://randomcards.onrender.com/api/games'
//const baseURL = 'https://localhost:7265/api/games'

export const getHand = async () => {
    try {
        const response = await fetch(baseURL)
        return await response.json() as GetHandResponse
    } catch (err) {
        toast.error('Failed to get cards.')
    }
}

export const throwCards = async (request: ThrowCardsRequest)  => {
    try {
        const response = await fetch(`${baseURL}/${request.gameId}/hands`, {
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
        const response = await fetch(`${baseURL}/history`)
        return await response.json() as HistoryResponse
    } catch (err) {
        toast.error('Failed to get game history.')
    }
}