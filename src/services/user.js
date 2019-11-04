import { request, config } from '../utils'

const { api: { user } } = config

export const query = params => request.get(user, params)