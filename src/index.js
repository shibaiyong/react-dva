//import { notification } from 'antd'
import dva from 'dva'
import createLoading from 'dva-loading'


const app = dva({
    ...createLoading({
        effects: true,
    }),
})

app.model(require('./models/app'))

app.router(require('./router'))

app.start(document.body.appendChild(document.createElement('div')))

export default app

