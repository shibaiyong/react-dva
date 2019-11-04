import React from 'react'
import { List, } from 'antd-mobile'
import './index.less'
import c1 from '../../assets/apply/c1.png'
import c2 from '../../assets/apply/c2.jpg'
import c3 from '../../assets/apply/c3.jpg'
import down from '../../assets/apply/down.png'
import downCurrent from '../../assets/apply/downCurrent.jpg'
import { getZhugeioMethod } from '../../utils/native';

const imgList = [c1, c2, c3]

const Filters = ({
    isPurposes,
    isGrades,
    isBanks,
    bank_id,
    grade_id,
    purpose_id,
    purposes,
    grades,
    banks,
    changeFiler,
    fetchFilter
}) => {
    function onChangeFiler(type) {
        const _payload = {
            isBanks: false,
            isGrades: false,
            isPurposes: false
        }
        if (type == 'banks') {
            const payload = Object.assign(_payload, { isBanks: !isBanks })
            changeFiler(payload)
        } else if (type == 'grades') {
            const payload = Object.assign(_payload, { isGrades: !isGrades })
            changeFiler(payload)
        } else if (type == 'purposes') {
            const payload = Object.assign(_payload, { isPurposes: !isPurposes })
            changeFiler(payload)
        }
    }
    const bankName = bank_id ? banks.filter(item => item.id == bank_id)[0].name : ''
    const gradeName = grade_id ? grades.filter(item => item.id == grade_id)[0].name : ''
    const purposeName = purpose_id ? purposes.filter(item => item.id == purpose_id)[0].name : ''
    return (
        <div className='filter-main'>
            <div className='filter-header'>
                <div className={isBanks || bank_id ? 'filter-item current' : 'filter-item'} onClick={() => onChangeFiler('banks')}>
                    {bank_id ? `${bankName}` : `全部银行`}
                    {isBanks || bank_id ?
                        <img src={downCurrent} /> :
                        <img src={down} />
                    }
                </div>
                <div className={isGrades || grade_id ? 'filter-item current' : 'filter-item'} onClick={() => onChangeFiler('grades')}>
                    {grade_id ? `${gradeName}` : `全部等级`}
                    {isGrades || grade_id ?
                        <img src={downCurrent} /> :
                        <img src={down} />
                    }
                </div>
                <div className={isPurposes || purpose_id ? 'filter-item current' : 'filter-item'} onClick={() => onChangeFiler('purposes')}>
                    {purpose_id ? `${purposeName}` : `全部用途`}
                    {isPurposes || purpose_id ?
                        <img src={downCurrent} /> :
                        <img src={down} />
                    }
                </div>
            </div>
            {isBanks &&
                <ul className='filter-list'>
                    <li
                        key='0'
                        id=''
                        className={bank_id == '' ? 'current' : ''}
                        onClick={() => fetchFilter({ bank_id: '', isBanks: false })}
                    >
                        全部银行
                    </li>
                    {
                        banks.map(item => {
                            const { id, name } = item
                            return (
                                <li
                                    key={id}
                                    id={id}
                                    className={id == bank_id ? 'current' : ''}
                                    onClick={() => {
                                        try{
                                            getZhugeioMethod({
                                                zhugeNo: 401,
                                                zhugeParams: {
                                                    '银行': name
                                                }
                                            })
                                        }catch( error ){
                                            console.log(error)
                                        }
                                        
                                        fetchFilter({ bank_id: id, isBanks: false })
                                    }}
                                >
                                    {name}
                                </li>
                            )
                        })
                    }
                </ul>
            }
            {isGrades &&
                <ul className='filter-list'>
                    <li
                        key='0'
                        id=''
                        className={grade_id == '' ? 'current' : ''}
                        onClick={() => fetchFilter({ grade_id: '', isGrades: false })}
                    >
                        全部等级
                    </li>
                    {
                        grades.map(item => {
                            const { id, name } = item
                            return (
                                <li
                                    key={id}
                                    id={id}
                                    className={id == grade_id ? 'current' : ''}
                                    onClick={() => {
                                        try{
                                            getZhugeioMethod({
                                                zhugeNo: 402,
                                                zhugeParams: {
                                                    '等级': name
                                                }
                                            })
                                        }catch( error ){
                                            console.log(error)
                                        }
                                        
                                        fetchFilter({ grade_id: id, isGrades: false })
                                    }}
                                >
                                    {name}
                                </li>
                            )
                        })
                    }
                </ul>
            }
            {isPurposes &&
                <ul className='filter-list'>
                    <li
                        key='0'
                        id=''
                        className={purpose_id == '' ? 'current' : ''}
                        onClick={() => fetchFilter({ purpose_id: '', isPurposes: false })}
                    >
                        全部用途
                    </li>
                    {
                        purposes.map((item, index) => {
                            const { id, name, introduct } = item
                            if (index < 3) {
                                return (
                                    <li
                                        key={id}
                                        id={id}
                                        className={id == purpose_id ? 'current' : ''}
                                        onClick={() => {
                                            try{
                                                getZhugeioMethod({
                                                    zhugeNo: 403,
                                                    zhugeParams: {
                                                        '用途': name
                                                    }
                                                })

                                            }catch( error ){
                                                console.log(error)
                                            }
                                            
                                            fetchFilter({ purpose_id: id, isPurposes: false })
                                        }}
                                    >
                                        <img src={imgList[index]} /><b>{name} </b> <i>{introduct}</i>
                                    </li>
                                )
                            }
                            return (
                                <li
                                    key={id}
                                    id={id}
                                    className={id == purpose_id ? 'current' : ''}
                                    onClick={() => {

                                        try{

                                            getZhugeioMethod({
                                                zhugeNo: 403,
                                                zhugeParams: {
                                                    '用途': name
                                                }
                                            })

                                        }catch( error ){
                                            console.log( error )
                                        }
                                        
                                        fetchFilter({ purpose_id: id, isPurposes: false })
                                    }}
                                >
                                    <span>{name} </span> <i>{introduct}</i>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default Filters