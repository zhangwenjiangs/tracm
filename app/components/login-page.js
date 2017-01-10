// app/components/index.js

import Ember from 'ember';

export default Ember.Component.extend({
    authManager: Ember.inject.service('auth-manager'),  //注入service
    userIsLogin: false,

    isDisabledu: Ember.computed.empty('username'),
    isDisabledp: Ember.computed.empty('password'),
    
    isDisabled: Ember.computed('username', 'password', function() {
        //console.log('observer is called: ', this.get('userName'),this.get('isDisabledu'),this.get('isDisabledp'),this.get('passWord'));
        return (this.get('isDisabledu') || this.get('isDisabledp'));  //判断输入框内容是否为空
    }),

    actions: {
        login() {
            const { username, password } = this.getProperties('username', 'password');
            //调用service类中的authenticate方法校验登录的用户
            console.log(username,password);
            this.get('authManager').authenticate(username, password).then(() => {
                console.log('登录成功');
            }, (err) => {
                console.log('登录失败');
            });
        }
    }
});