import React from 'react'
import { NavBar, Icon, List, Badge } from 'antd-mobile'
import './index.less'
import { connect } from 'dva'
import p1 from '../../assets/apply/p1.png'
import p2 from '../../assets/apply/p2.png'
import p3 from '../../assets/apply/p3.png'
const Item = List.Item
import config from '../../utils/config'
const { api: { imgdownload } } = config
import { routerRedux } from 'dva/router'
import { getZhugeioMethod } from '../../utils/native'

const global = window

class Theme extends React.Component {
    componentDidMount() {
        try{
            getZhugeioMethod({
                zhugeNo: 405,
                zhugeParams: {
                    '主题栏目位置': global.themeLocation
                }
            })
        }catch( error ){
            console.log( error )
        }
    }
    render() {
        const { dispatch, themes, loading, location, app } = this.props

        const { theme, themeExts } = themes
        const themeStyle = app.theme
        const goBack = () => {
            dispatch(routerRedux.push({
                pathname: `/marketIndex`
            }))
        }
        const cx = (name) => {
            if (name == 'ruishua') {
                return 'am-ruishua'
            } else {
                return 'am-ruihebao'
            }
        }
        const extra = (index) => {
            if (index == 0) {
                return (<img src={p1} />)
            } else if (index == 1) {
                return (<img src={p2} />)
            } else if (index == 2) {
                return (<img src={p3} />)
            } else {
                return ''
            }
        }
        return (
            <div>
                <NavBar
                    mode="dark"
                    className={cx(themeStyle)}
                    icon={<Icon type="left" onClick={goBack} />}
                >
                    {theme.name}
                </NavBar>
                <List className='themeItem'>
                    {
                        themeExts.map((item, index) => {
                            const { icon, name, id, link, introduct, tag1, tag2, card } = item
                            return (
                                <Item
                                    arrow="horizontal"
                                    extra={extra(index)}
                                    multipleLine={true}
                                    arrow=''
                                    key={id}
                                >
                                    <a href={card.link} target='_blank' >
                                        <div className='itemContent'>
                                            <div className='themeContent-img'><img src={`${imgdownload}${icon}`} /></div>
                                            <div className='themeContent-c'>
                                                <div className='title'>{name}</div>
                                                <div className='des'>{introduct}</div>
                                                <div>
                                                    <Badge text={tag1}
                                                        style={{
                                                            padding: '0 3px',
                                                            backgroundColor: '#fff',
                                                            color: '#ff5f57',
                                                            fontSize: '12px',
                                                            border: '1px solid #ff5f57',
                                                            borderRadius: '4px'
                                                        }}
                                                    />
                                                    {tag2 &&
                                                        <Badge text={tag2}
                                                            style={{
                                                                padding: '0 3px',
                                                                backgroundColor: '#fff',
                                                                color: '#ff5f57',
                                                                marginLeft: '5px',
                                                                fontSize: '12px',
                                                                border: '1px solid #ff5f57',
                                                                borderRadius: '4px'
                                                            }}
                                                        />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Item>
                            )
                        })
                    }

                </List>
            </div>
        )
    }
}

export default connect(({ loading, themes, app }) => ({ loading, themes, app }))(Theme)