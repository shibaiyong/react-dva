import modelExtend from 'dva-model-extend'

const model = {
    reducers: {
        updateState(state, { payload }) {
            return {
                ...state,
                ...payload,
            }
        },
    }
}

const pageModel = modelExtend(model, {
    state: {
        content: [],
        pagination: {
            pageSize: 10,
            current: 1
        }
    },
    reducers: {
        querySuccess(state, { payload }) {
            const { content, pageable: { pageSize, pageNumber }, totalElements } = payload
            return {
                ...state,
                content,
                pagination: {
                    pageSize,
                    current: pageNumber + 1,//后台返回的页面是从0开始
                    total: totalElements
                }
            }
        },
    }
})


module.exports = {
    model,
    pageModel,
}