import React from 'react'
import { Icon, Card, Carousel } from 'antd-mobile'
import './index.less'
import config from '../../utils/config'
import { getZhugeioMethod } from '../../utils/native'
const { api: { imgdownload } } = config

const position = {
    postion11: {},
    postion12: {},
    postion13: {},
    postion21: {},
    postion22: {},
    postion23: {},
}

const Recomends = ({
    recomends,
    setlocation

}) => {
    function getPositon(recomends) {
        const newpos = Object.keys(recomends).reduce((pre, cur) => {
            pre[`postion${cur}`] = recomends[cur]
            return pre
        }, {})
        return Object.assign({}, position, newpos)
    }

    function fluentCardType(name, order){
        window.zhuge.track('clickcardtype',{
            name,order
        })
    }


    const { postion11, postion12, postion13, postion21, postion22, postion23 } = getPositon(recomends)
    return (
        <Card full className='amCardFull'>
            <Card.Header
                title={<span className='card-title' onClick={fluentCardType.bind(this,'todayrecommend','1')}><i></i>今日推荐</span>}
                extra={<span className='extra' onClick={() => setlocation('apply')}>申请进度查询<Icon type="right" /></span>}
            />
            <Card.Body className='amCardBody'>
                <Carousel
                    autoplay
                    infinite
                    autoplayInterval='3000'
                >
                    <div className='carItem' key="0">
                        <div className='carItemCotent'>
                            <div className='carItemLeft'>
                                <a href={postion11.linkrule == 1 ? postion11.card.link : postion11.link} target='_blank'
                                    onClick={
                                        () => {
                                            try{
                                                getZhugeioMethod({
                                                    zhugeNo: 391,
                                                    zhugeParams: {
                                                        '栏目位置': '1左'
                                                    }
                                                })
                                            }catch( error ){
                                                console.log( error )
                                            }
                                        }
                                    }
                                >
                                    <h5>{postion11.name}</h5>
                                    <span>{postion11.introduct1} {postion11.introduct2 ? ',' : ''} {postion11.introduct2}</span>
                                    {postion11.icon && <img src={`${imgdownload}${postion11.icon}`} />}
                                </a>
                            </div>
                            <div className='carItemRight'>
                                <div className='carItemRightItem'>
                                    <a href={postion12.linkrule == 1 ? postion12.card.link : postion12.link} target='_blank'
                                        onClick={
                                            () => {
                                                try{
                                                    getZhugeioMethod({
                                                        zhugeNo: 391,
                                                        zhugeParams: {
                                                            '栏目位置': '1右上'
                                                        }
                                                    })
                                                }catch( error ){
                                                    console.log( error )
                                                }
                                            }
                                        }
                                    >
                                        <div className='itemText'>
                                            <h5 className='one'>{postion12.name}</h5>
                                            <span>{postion12.introduct1} {postion12.introduct2 ? ',' : ''} {postion12.introduct2}</span>
                                        </div>
                                        <div className='imgDiv'>
                                            {postion12.icon && <img src={`${imgdownload}${postion12.icon}`} />}
                                        </div>
                                    </a>
                                </div>
                                <div className='carItemRightItem'>
                                    <a href={postion13.linkrule == 1 ? postion13.card.link : postion13.link} target='_blank'
                                        onClick={
                                            () => {
                                                try{
                                                    getZhugeioMethod({
                                                        zhugeNo: 391,
                                                        zhugeParams: {
                                                            '栏目位置': '1右下'
                                                        }
                                                    })
                                                }catch( error ){
                                                    console.log( error )
                                                }
                                            }
                                        }
                                    >
                                        <div className='itemText'>
                                            <h5 className='two'>{postion13.name}</h5>
                                            <span>{postion13.introduct1} {postion13.introduct2 ? ',' : ''} {postion13.introduct2}</span>
                                        </div>
                                        <div className='imgDiv'>
                                            {postion13.icon && <img src={`${imgdownload}${postion13.icon}`} />}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carItem' key="1">
                        <div className='carItemCotent'>
                            <div className='carItemLeft'>
                                <a href={postion21.linkrule == 1 ? postion21.card.link : postion21.link} target='_blank'
                                    onClick={
                                        () => {
                                            try{
                                                getZhugeioMethod({
                                                    zhugeNo: 391,
                                                    zhugeParams: {
                                                        '栏目位置': '2左'
                                                    }
                                                })
                                            }catch( error ){
                                                console.log(error)
                                            }
                                        }
                                    }
                                >
                                    <h5>{postion21.name}</h5>
                                    <span>{postion21.introduct1} {postion21.introduct2 ? ',' : ''} {postion21.introduct2}</span>
                                    {postion21.icon && <img src={`${imgdownload}${postion21.icon}`} />}
                                </a>
                            </div>
                            <div className='carItemRight'>
                                <div className='carItemRightItem'>
                                    <a href={postion22.linkrule == 1 ? postion22.card.link : postion22.link} target='_blank'
                                        onClick={
                                            () => {
                                                try{
                                                    getZhugeioMethod({
                                                        zhugeNo: 391,
                                                        zhugeParams: {
                                                            '栏目位置': '2右上'
                                                        }
                                                    })
                                                }catch( error ){
                                                    console.log(error)
                                                }
                                                
                                            }
                                        }
                                    >
                                        <div className='itemText'>
                                            <h5 className='one'>{postion22.name}</h5>
                                            <span>{postion22.introduct1} {postion22.introduct2 ? ',' : ''} {postion22.introduct2}</span>
                                        </div>
                                        <div className='imgDiv'>
                                            {postion22.icon && <img src={`${imgdownload}${postion22.icon}`} />}
                                        </div>
                                    </a>
                                </div>
                                <div className='carItemRightItem'>
                                    <a href={postion23.linkrule == 1 ? postion23.card.link : postion23.link} target='_blank'
                                        onClick={
                                            () => {
                                                try{
                                                    getZhugeioMethod({
                                                        zhugeNo: 391,
                                                        zhugeParams: {
                                                            '栏目位置': '2右下'
                                                        }
                                                    })
                                                }catch( error ){
                                                    console.log(error)
                                                }
                                                
                                            }
                                        }
                                    >
                                        <div className='itemText'>
                                            <h5 className='two'>{postion23.name}</h5>
                                            <span>{postion23.introduct1} {postion23.introduct2 ? ',' : ''} {postion23.introduct2}</span>
                                        </div>
                                        <div className='imgDiv'>
                                            {postion23.icon && <img src={`${imgdownload}${postion23.icon}`} />}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </Card.Body>
        </Card>
    )

}


export default Recomends