import { request, config } from '../utils'

const { api: { roles, rolesResources, rolesAll } } = config

export const query = params => request.get(roles, params)

export const queryAll = _ => request.get(rolesAll)

export const queryResources = params => request.post(rolesResources, params)

export const remove = params => request.delete(roles, params)

export const create = params => request.post(roles, params)

export const update = (params) => request.patch(roles, params)