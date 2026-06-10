import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Account API 类型定义
 */
export interface AccountAPI {
    /**
     * 登录
     * @path /api/account/login
     */
    login: (data: {
        /** 用户名（必需） */
        userName: string;
        /** 密码（必需） */
        userPassword: string;
        /** 验证码（必需） */
        captcha: string;
        /** 云区域（必需） */
        cloudRegion: number;
    }) => SyApiMethodResponse<any>;
    /**
     * 检查激活码
     * @path /api/account/checkActivationcode
     */
    checkActivationcode: (data: {
        /** 激活码（必需） */
        data: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 使用激活码
     * @path /api/account/useActivationcode
     */
    useActivationcode: (data: {
        /** 激活码（必需） */
        data: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 停用账户
     * @path /api/account/deactivate
     */
    deactivate: () => SyApiMethodResponse<any>;
    /**
     * 开始免费试用
     * @path /api/account/startFreeTrial
     */
    startFreeTrial: () => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map