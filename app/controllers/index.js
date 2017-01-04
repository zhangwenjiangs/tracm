// app/controller/index.js

import Ember from 'ember';

export default Ember.Controller.extend({  
    //isDisabled: true, //设置默认值为true

    isDisabledu: Ember.computed.empty('userName'),
    isDisabledp: Ember.computed.empty('passWord'),
    
    isDisabled: Ember.computed('userName', 'passWord', function() {
        //console.log('observer is called: ', this.get('userName'),this.get('isDisabledu'),this.get('isDisabledp'),this.get('passWord'));
        return (this.get('isDisabledu') || this.get('isDisabledp'));  //判断输入框内容是否为空
    }),

    // 定义一个计算属性，当属性username发生变化时会被执行不是主动执行的，是要有人调用才执行，
    // 比如执行：this.get('username')去调用这个属性才会执行
    //actualNserName: Ember.computed('userName', function() {
    //    console.log('actualUserName function is called: ', this.get('userName'));
    //}),
    // 定义一个观察器，当属性emailAddress发生变化时会自动执行，也就是说观察器会检测属性emailAddress值的变化
    //userNameChanged: Ember.observer('userName', function() {
    //    console.log('observer is called: ', this.get('userName'));
    //})
    
    actions: {
        logIn: function() {
            //  注意alert中字符串两边使用的是 `  不是单引号或者双引号
            //alert(`Saving of the following email address is in propgress: ${this.get('userName')}`);
            // 模拟保存操作
            if (this.get('userName')==='zhangwj' && this.get('passWord')== 'zhangwj123')
            {
                this.set('responseMessage_Er', ``);
                this.set('responseMessage_Su', `Thank you! We've just checked your name : ${this.get('userName')}`);
                //  情况输入框内容
                this.set('userName', '');
                this.set('passWord', '');
                this.transitionToRoute('homepage');

            }else{
                this.set('responseMessage_Su', ``);
                this.set('responseMessage_Er', `Invalid username or password!`);
                this.set('userName', '');
                this.set('passWord', '');
            }
        }
    }
});