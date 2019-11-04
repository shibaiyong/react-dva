import { request, config } from '../utils'

const { api: { users, usersRoles } } = config

export const query = params => request.get(users, params)

export const queryRoles = params => request.post(usersRoles, params)

export const remove = params => request.delete(users, params)

export const create = params => request.post(users, params)

export const update = (params) => request.patch(users, params)