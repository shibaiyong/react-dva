import { request, config } from '../utils'

const { api: {listProcessBankUrl} } = config


export const listProcessBank  = params => request.post(listProcessBankUrl, params)