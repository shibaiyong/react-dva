import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import CitySelect from '../../components/CitySelect/CitySelect'
import iconSrc from '../../assets/marketIndex/icon.png'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { getZhugeioMethod } from '../../utils/native'


class cityPick extends React.Component {
    componentDidMount() {
        try{
            getZhugeioMethod({
                zhugeNo: 395
            })
        }catch( error ){
            console.log( error )
        }
        
    }
    render() {

        const { dispatch, loading, location, app } = this.props

        const { theme, cityListData, city_id } = app
        const setlocation = (type) => {
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
        const cityData = {
            // 结构化城市列表数据
            citysData: cityListData,
            // 对某项数据定制化配置
            config: {
                pos: {
                    icon: iconSrc, // 游标图标
                    title: '定位城市',
                },
                hot: {
                    title: '热门城市',
                    key: '热',
                    style: 'line', // 展示形式（ line || grid）
                }
            }
        }
        const handleSelectCity = (code) => {
            const { id, name } = code
            dispatch({
                type: 'app/setData',
                payload: {
                    city_id: id,
                    city_name: name,
                }
            })
            setTimeout(setlocation, 0)
        }
        return (
            <div>
                <NavBar
                    mode="dark"
                    className={cx(theme)}
                    icon={<Icon type="left" onClick={setlocation} />}
                >
                    选择城市
            </NavBar>
                <CitySelect
                    // 传入数据
                    data={cityData.citysData}
                    // 传入配置
                    config={cityData.config}
                    // 传入回调
                    onSelectItem={handleSelectCity}

                    value={city_id}
                >
                </CitySelect>
            </div>
        )
    }
}


export default connect(({ loading, app }) => ({ loading, app }))(cityPick)