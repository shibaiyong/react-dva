import { request, config } from '../utils'
const { api: { resources, resourcesChildren } } = config

export const query = params => request.get(resources, params)

export const create = params => request.post(resources, params)

export const update = params => request.patch(resources, params)

export const queryByPid = params => request.get(resourcesChildren, params)

