import config from './config'
import request from './request'
import { notification } from 'antd'

//提示框
const openNotification = ({
    type = 'info',
    message = '信息',
    placement = 'bottomRight',
    description
}) => notification[type]({
    type,
    message,
    placement,
    description
})

const openNotificationError = description => openNotification({
    type: 'error',
    message: '错误',
    description
})



const { defaultIcon } = config

//获取小图标
const getIcon = icon => icon || defaultIcon

module.exports = {
    config,
    request,
    getIcon,
    openNotification,
    openNotificationError
}