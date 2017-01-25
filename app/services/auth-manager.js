// app/serivces/auth-manager.js

import Ember from 'ember';

export default Ember.Service.extend({
    accessToken: null,

    // 判断accessToken是否是空
    isAuthenticated: Ember.computed.bool('accessToken'),

    // 发起请求校验登录用户
    authenticate(username, password) {
        return Ember.$.ajax({
            method: 'post',
            url: '/homepage',
            data: { username: username, password: password }
        }).then((res) => {
            // 设置返回的access_token到service类的属性中
            this.set('accessToken', res.access_token);
            console.log('登录成功');
            //console.log(res);
        }, (err) => {
            //登录失败
            console.log('登录失败');
            //console.log(err);
        });
    },
    invalidate() {
        this.set('accessToken', null);
    }
});