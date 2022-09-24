import { toast } from "react-toastify"
import { GetHandResponse } from "./interfaces"

export const getHand = async () => {
    try {
        const response = await fetch('https://localhost:7265/api/games')
        return await response.json() as GetHandResponse
    } catch (err) {
        toast.error('Failed to get cards.')
    }
}