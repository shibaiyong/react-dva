import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import './index.less'
import { connect } from 'dva'
import config from '../../utils/config'
const { api: { imgdownload } } = config
import { routerRedux } from 'dva/router'
import { getZhugeioMethod } from '../../utils/native'


const Apply = ({
    dispatch, apply, app
}) => {
    const { applyList } = apply
    const { theme } = app
    const goBack = () => {

        try{
            getZhugeioMethod({
                zhugeNo: 383
            })
        }catch( err ){
            console.log('error')
        }
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
    return (
        <div className='apply-list'>
            <NavBar
                mode="dark"
                className={cx(theme)}
                icon={<Icon type="left" onClick={goBack} />}
            >
                申请进度查询
            </NavBar>
            <div className='apply-main'>
                {
                    applyList.map(item => {
                        const { processIcon, name, processLink, id } = item
                        return (
                            <div className='apply-item' key={id}>
                                <a href={processLink} target='_blank' >
                                    <div className='apply-img'>
                                        <img src={`${imgdownload}${processIcon}`} />
                                    </div>
                                    <div className='apply-name'>
                                        {name}
                                    </div>
                                    <div className='apply-icon'>
                                        <Icon type="right" />
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default connect(({ loading, apply, app }) => ({ loading, apply, app }))(Apply)