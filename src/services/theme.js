import { request, config } from '../utils'

const { api: {listThemeExtUrl} } = config


export const listThemeExt  = params => request.post(listThemeExtUrl, params)