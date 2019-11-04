import React from 'react'
import { Carousel } from 'antd-mobile'
import './index.less'
import config from '../../utils/config'
import { isEmpty } from 'lodash'
import { getZhugeioMethod } from '../../utils/native';
const { api: { imgdownload } } = config


const Adverts = ({
    adverts

}) => {
    const advertsDom = (dom) => {
        return (
            <Carousel
                autoplay
                infinite
                dots={false}
                autoplayInterval='4000'
            >
                {dom.map(item => {
                    const { link, icon, id, name } = item
                    return (
                        <div key={id}>
                            <a onClick={
                                () => {
                                    try{

                                        getZhugeioMethod({
                                            zhugeNo: 423,
                                            zhugeParams: {
                                                '广告主题': name
                                            }
                                        })

                                    }catch( error ){
                                        console.log( error )
                                    }
                                    
                                }
                            } href={link} target='_bank' >
                                <img src={`${imgdownload}${icon}`} />
                            </a>
                        </div>
                    )
                })
                }
            </Carousel>
        )
    }
    return (
        <div className='adverts'>
            {!isEmpty(adverts) && advertsDom(adverts)}
        </div>
    )

}


export default Adverts