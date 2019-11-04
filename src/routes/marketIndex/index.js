import React from 'react'
import {Affix} from 'antd'
import { NavBar, Icon,  WhiteSpace, Button } from 'antd-mobile'
import './index.less'
import queryString from 'query-string'
import { connect } from 'dva'
import {getCity, getCityBack, goBack} from '../../utils/native'
import Adverts from './Adverts'
import Recomends from './Recomends'
import Banks from './Banks'
import Themes from './Themes'
import HotCard from './HotCard'
import { routerRedux } from 'dva/router'

import alertToPhone from './alertToPhone.png'
import signUpInCredit from './signUpInCredit@2x.png'
import closeico from './closei-con@2x.png'

function MarketIndex({
    dispatch, market, loading, location, app
}) {
    const {adverts, recomends, banks, unfold, themes, hotcards, isAlert} = market
    const {theme, city_name} = app
    const setlocation = (type) => {
        dispatch(routerRedux.push({
            pathname: `/${type}`
        }))
    }
    const cx = (name) => {
        if(name== 'ruishua') {
            return 'am-ruishua'
        } else {
            return 'am-ruihebao'
        }
    }
    const advertProps = {
        adverts
    }
    const recomendsProps = {
        recomends,
        setlocation
    }
    const banksProps = {
        banks,
        setlocation,
        unfold,
        onChangeFilter(key, value) {
            dispatch({
                type: 'market/onChangeFilter',
                key,
                value
            })
        }
    }
    const themeProps = {
        themes,
        onThemext(id){
            dispatch(routerRedux.push({
                pathname: '/theme',
                search: queryString.stringify({
                    theme_id: id
                })
            }))
        }
    }
    const cardProps = {
        hotcards,
        setlocation
    }
    const setStatus = (val) => {
        dispatch({
            type: 'market/getStatus',
            isAlert:val
        })
    }
    return (
        <div className='marketIndex'>
            <NavBar
                className={cx(theme)}
                mode="dark"
                style={{position:'fixed', width: '100%', zIndex: 100}}
                icon={<Icon type="left" onClick={goBack} />}
                rightContent={[
                    <span key="0" onClick={() => setlocation('cityPick')}>{city_name}</span>,
                    <Icon key="1" type="down" />,
                ]}
            >
                信用卡超市
            </NavBar>
            {
                // 广告展示 <Button onClick={()=>getCityBack()}>定位</Button>
            }
            <div style={{height: '45px'}}></div>
            <Adverts {...advertProps} />
            <Recomends {...recomendsProps} />
            <WhiteSpace size="md" />
            <Banks {...banksProps} />
            <WhiteSpace size="md" />
            <Themes {...themeProps} />
            <WhiteSpace size="md" />
            <HotCard {...cardProps} />
            {
                isAlert&&
                    <div className="toastcontainer">
                        <div className="toast">
                            <img src={alertToPhone}/>
                            <a href="http://actives.bzqmall.com.cn/activity/bankactivity/banklist" target="_blank"><img className="signup" src={signUpInCredit}/></a>
                        </div>
                        <img className="closeico" onClick={setStatus.bind(this, false)} src={closeico}/>
                    </div>
            }
            
        </div>
    )
}

export default connect(({ loading, market, app }) => ({ loading, market, app }))(MarketIndex)