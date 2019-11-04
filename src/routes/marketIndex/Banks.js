import React from 'react'
import { NavBar, Icon, WingBlank, WhiteSpace, Card, Carousel, Grid, Badge, Button } from 'antd-mobile'
import styles from './index.less'
import config from '../../utils/config'
import { getZhugeioMethod } from '../../utils/native'
const { api: { imgdownload } } = config


const Banks = ({
    banks,
    setlocation,
    unfold,
    onChangeFilter

}) => {
    const lackbanks = banks.length > 8 ? !unfold ? banks.slice(0, 8) : banks : banks
    return (
        <Card full className='amCardFull'>
            <Card.Header
                title={<span className='card-title'><i></i>
                    热门银行</span>}
                extra={<span className='extra' onClick={() => {
                    try{
                        getZhugeioMethod({
                            zhugeNo: 384,
                        })
                    }catch( error ){
                        console.log( error )
                    }
                    
                    setlocation('card')
                }}>全部卡片<Icon type="right" /></span>}
            />
            <Card.Body className='amCardBodycard'>
                <Grid data={lackbanks} hasLine={false} itemStyle={{ height: '66px' }}
                    renderItem={dataItem => (
                        <div style={{ padding: '14px 0 0 0' }} >
                            <a href={dataItem.link} target='_blank' onClick={() => {
                                try{
                                    getZhugeioMethod({
                                        zhugeNo: 390,
                                        zhugeParams: {
                                            '银行名称': dataItem.name
                                        }
                                    })
                                }catch( error ){
                                    console.log( error )
                                } 
                            }}>
                                {dataItem.iconWord ?
                                    <Badge
                                        text={dataItem.iconWord}
                                        size='small'
                                        style={{
                                            fontSize: '12px',
                                            transform: 'scale(.8)',
                                            marginLeft: '-5px',
                                            background: dataItem.iconColor
                                        }}
                                    >
                                        <img src={`${imgdownload}${dataItem.icon}`} style={{ width: '32px', height: '32px' }} alt="" />
                                    </Badge>
                                    :
                                    <img src={`${imgdownload}${dataItem.icon}`} style={{ width: '32px', height: '32px' }} alt="" />
                                }
                            </a>
                            <div style={{ color: '#666', fontSize: '12px', marginTop: '2px' }}>
                                <span>{dataItem.name}</span>
                            </div>
                        </div>
                    )}
                />
            </Card.Body>
            {banks.length > 8 &&
                <div className='down' >
                    <span onClick={() => {
                        if(!unfold){
                            try{
                                getZhugeioMethod({
                                    zhugeNo: 393
                                })
                            }catch(error){
                                console.log(error)
                            }
                        }
                        onChangeFilter('unfold', !unfold)
                    }}>
                        {unfold ?
                            <Icon key="1" type="up" /> :
                            <Icon key="1" type="down" />
                        }
                    </span>
                </div>
            }
        </Card>
    )
}

export default Banks