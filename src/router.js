import React from 'react'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import App from './routes/app'

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {

    

    const routes = [
        {
            path: '/marketIndex',
            models: () => [import('./models/market')],
            component: () => import('./routes/marketIndex/'),
        },
        {
            path: '/cityPick',
            component: () => import('./routes/cityPick/'),
        },
        {
            path: '/apply',
            models: () => [import('./models/apply')],
            component: () => import('./routes/apply/'),
        },
        {
            path: '/theme',
            models: () => [import('./models/theme')],
            component: () => import('./routes/theme/'),
        },
        {
            path: '/card',
            models: () => [import('./models/card')],
            component: () => import('./routes/card/'),
        }
    ]

    return (
        <ConnectedRouter history={history}>
            <LocaleProvider locale={zh_CN}>
                <App>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/marketIndex" />)} />
                        {
                            routes.map(({ path, ...dynamics }, key) => (
                                <Route key={path}
                                    exact
                                    path={path}
                                    component={dynamic({
                                        app,
                                        ...dynamics,
                                    })}
                                />
                            ))
                        }
                    </Switch>
                </App>
            </LocaleProvider>
        </ConnectedRouter>
    )
}

export default Routers