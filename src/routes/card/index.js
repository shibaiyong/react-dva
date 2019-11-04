import React from 'react'
import { NavBar, Icon, List } from 'antd-mobile'
import './index.less'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import config from '../../utils/config'
import { isEmpty } from 'lodash'
const { api: { imgdownload } } = config
const Item = List.Item
import Filters from './Filters'
import noData from '../../assets/marketIndex/noData.png'
import { getZhugeioMethod } from '../../utils/native';

class Cards extends React.Component {
    componentDidMount() {
        try{
            getZhugeioMethod({
                zhugeNo: 394
            })
        }catch( error ){
            console.log( error )
        }
    }
    render() {

        const { dispatch, cardModel, app } = this.props

        const { cardList, bank_id, grade_id, purpose_id, isPurposes, isGrades, isBanks, purposes, grades, banks, type } = cardModel
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
        const fetchCardList = () => {
            dispatch({
                type: 'cardModel/fetchCardList'
            })
        }
        const filerProps = {
            isPurposes,
            isGrades,
            isBanks,
            bank_id,
            grade_id,
            purpose_id,
            purposes,
            grades,
            banks,
            type,
            changeFiler(payload) {
                dispatch({
                    type: 'cardModel/onChangeFilter',
                    payload
                })
            },
            fetchFilter(payload) {
                dispatch({
                    type: 'cardModel/onChangeFilter',
                    payload
                })
                setTimeout(fetchCardList, 0)
            }
        }
        return (
            <div>
                <NavBar
                    mode="dark"
                    className={cx(themeStyle)}
                    icon={<Icon type="left" onClick={goBack} />}
                    style={{position:'fixed',top:'0px',left:'0px',zIndex:'10001',width:'100%'}}
                >
                    全部信用卡
            </NavBar>
                <Filters  {...filerProps} />
                <List className='cardItem'>
                    {
                        cardList.map(item => {
                            const { icon, name, id, link, introduct, tag1, tag2 } = item
                            return (
                                <Item
                                    arrow="horizontal"
                                    extra={<div className='extraText'><a href={link} target='_blank'>立即申请</a></div>}
                                    multipleLine={true}
                                    arrow=''
                                    key={id}
                                >
                                    <a href={link} target='_blank'>
                                        <div className='itemContent'>
                                            <div className='themeContent-img'><img src={`${imgdownload}${icon}`} /></div>
                                            <div className='themeContent-c'>
                                                <div className='title'>{name}</div>
                                                <div className='des'>{introduct}</div>
                                                <div className='tips'>
                                                    {tag1} &nbsp;
                                                {tag2 &&
                                                        [<span key='0'></span>, <i key='1'>&nbsp;{tag2}</i>]
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
                {isEmpty(cardList) &&
                    <div className='no-data'>
                        <img src={noData} />
                    </div>
                }
            </div>
        )
    }
}

export default connect(({ loading, cardModel, app }) => ({ loading, cardModel, app }))(Cards)