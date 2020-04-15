import React from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'dva/router'
import { config } from '../utils'
import { connect } from 'dva'
import '../themes/index.less'
import './app.less'
import 'nprogress/nprogress.css'

import '../utils/zhugeiosdk.js'

let lastHref

function App({ children, app, history}) {
    const {
        theme
    } = app
    const { href } = window.location
    if (lastHref != href) {
        window.scrollTo(0, 0)
        lastHref = href
    }
    window.history.scrollRestoration="manual"
    return [
        <Helmet key='2'>
            <title>{config.name}</title>
            <script src='./flexible.js'></script>
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />
        </Helmet>,
        <div key='1'  >{children}</div>
    ]
}

export default withRouter(connect(({ app, loading, theme }) => ({ app, loading, theme }))(App))