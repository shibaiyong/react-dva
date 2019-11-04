import React from 'react'
import { Icon, Card, Badge } from 'antd-mobile'
import './index.less'
import config from '../../utils/config'
import { getZhugeioMethod } from '../../utils/native'
const {api: {imgdownload}} = config



const HotCard = ({
    hotcards,
    setlocation
}) => {
    return (
        <Card full className='hot-card'>
        <Card.Header
            title={<span className='card-title' ><i></i>
            热卡推荐</span>}
            extra={<span className='extra' onClick={() => {

                try{
                    getZhugeioMethod({
                        zhugeNo: 385,
                    })
                }catch( error ){
                    console.log(error)
                }
                setlocation('card')
            }} >全部卡片<Icon  type="right" /></span>}
        />
        <Card.Body className='themeBody'>
            {
                hotcards.map(item => {
                    const {icon, name, introduct, tag1, tag2, link, id, linkrule, card} = item
                    return (
                        <div className='recommend' key={id}>
                            <a href={link ? link: card.link} target='_blank'
                                onClick={
                                    () => {
                                        try{
                                            getZhugeioMethod({
                                                zhugeNo: 392,
                                                zhugeParams: {
                                                    '热卡名称': name
                                                }
                                            })
                                        }catch( error ){
                                            console.log( error )
                                        }
                                    }
                                }
                            >
                            <div className='left'>
                                <img src={`${imgdownload}${icon}`}  />
                            </div>
                            <div className='right'>
                                <div className='title'>{name}</div>
                                <div className='des'>{introduct}</div>
                                <div className='tips'>
                                    <Badge text={tag1}
                                        style={{
                                            padding: '0 10px',
                                            backgroundColor: '#fff',
                                            color: '#f19736',
                                            border: '1px solid #f19736',
                                            borderRadius: '10px',
                                            transform: 'scale(.83)',
                                        }}
                                    />
                                    {tag2 && 
                                        <Badge text={tag2}
                                            style={{
                                                marginLeft: '-4px',
                                                padding: '0 10px',
                                                backgroundColor: '#fff',
                                                color: '#f19736',
                                                border: '1px solid #f19736',
                                                borderRadius: '10px',
                                                transform: 'scale(.83)',
                                            }}
                                        />
                                    }
                                </div>
                            </div>
                            </a>
                        </div>
                    )
                })
            }
            
        </Card.Body>
    </Card>
    )

}


export default HotCard