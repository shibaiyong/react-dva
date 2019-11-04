import React from 'react'
import { Card } from 'antd-mobile'
import './index.less'
import config from '../../utils/config'
import { getZhugeioMethod } from '../../utils/native'
const { api: { imgdownload } } = config

const global = window

const theme = {
    theme1: {},
    theme2: {},
    theme3: {},
    theme4: {},
}

const Theme = ({
    themes,
    onThemext

}) => {
    function getPositon(themes) {
        const newpos = Object.keys(themes).reduce((pre, cur) => {
            pre[`theme${cur}`] = themes[cur]
            return pre
        }, {})
        return Object.assign({}, theme, newpos)
    }
    const { theme1, theme2, theme3, theme4 } = getPositon(themes)
    function goTheme(id) {
        if (id) {
            onThemext(id)
        }
    }
    return (
        <Card full style={{ paddingBottom: 0 }}>
            <Card.Header
                title={<span className='card-title'><i></i>
                    主题精选</span>}
                className='theme-header'
            />
            <Card.Body className='themeBody'>
                <div className='theme'>
                    <div className='themeItem' onClick={() => {

                        global.themeLocation = '左上'

                        try{
                            getZhugeioMethod({
                                zhugeNo: 404,
                                zhugeParams: {
                                    '主题栏目位置': global.themeLocation
                                }
                            })
                        }catch( error ){
                            console.log( error )
                        }
                        goTheme(theme1.id)
                    }}>
                        <div className='left'>
                            <div className='title'>{theme1.name}</div>
                            <div className='des'>{theme1.introduct}</div>
                        </div>
                        <div className='right one'>
                            {theme1.icon && <img src={`${imgdownload}${theme1.icon}`} />}
                        </div>
                    </div>
                    <div className='themeItem' onClick={() => {

                        global.themeLocation = '右上'
                        try{
                            getZhugeioMethod({
                                zhugeNo: 404,
                                zhugeParams: {
                                    '主题栏目位置': global.themeLocation
                                }
                            })
                        }catch( error ){
                            console.log( error )
                        }

                        goTheme(theme3.id)
                    }}>
                        <div className='left'>
                            <div className='title'>{theme3.name}</div>
                            <div className='des'>{theme3.introduct}</div>
                        </div>
                        <div className='right'>
                            {theme3.icon && <img src={`${imgdownload}${theme3.icon}`} />}
                        </div>
                    </div>
                    <div className='themeItem' onClick={() => {
                        global.themeLocation = '左下'

                        try{
                            getZhugeioMethod({
                                zhugeNo: 404,
                                zhugeParams: {
                                    '主题栏目位置': global.themeLocation
                                }
                            })
                        }catch( error ){
                            console.log( error )
                        }
                        goTheme(theme2.id)
                    }}>
                        <div className='left'>
                            <div className='title'>{theme2.name}</div>
                            <div className='des'>{theme2.introduct}</div>
                        </div>
                        <div className='right'>
                            {theme2.icon && <img src={`${imgdownload}${theme2.icon}`} />}
                        </div>
                    </div>
                    <div className='themeItem' onClick={() => {
                        global.themeLocation = '右下'

                        try{
                            getZhugeioMethod({
                                zhugeNo: 404,
                                zhugeParams: {
                                    '主题栏目位置': global.themeLocation
                                }
                            })
                        }catch( error ){
                            console.log( error )
                        }
                        
                        goTheme(theme4.id)
                    }}>
                        <div className='left'>
                            <div className='title'>{theme4.name}</div>
                            <div className='des'>{theme4.introduct}</div>
                        </div>
                        <div className='right'>
                            {theme4.icon && <img src={`${imgdownload}${theme4.icon}`} />}
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )

}


export default Theme