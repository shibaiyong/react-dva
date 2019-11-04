import { request, config } from '../utils'

const { api: {cardListUrl, cardFiltersUrl} } = config


export const cardList  = params => request.post(cardListUrl, params)

export const cardFilters  = params => request.post(cardFiltersUrl, params)