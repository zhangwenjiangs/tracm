//  app/routes/homepage/crud.js

import Ember from 'ember';

export default Ember.Route.extend({
	    model: function () {
        return [
            { id: 1, title: '111', accepted: true,analyzing: true, assigned: true, closed: false, closing:false},
            { id: 2, title: '222', accepted: true,analyzing: false, assigned: false, closed: true, closing:false},
            { id: 3, title: '333', accepted: true ,analyzing: true, assigned: false, closed: false, closing:true},
            { id: 4, title: '444', accepted: false ,analyzing: true, assigned: false, closed: true, closing:false},
            { id: 5, title: '555', accepted: true ,analyzing: true, assigned: false, closed: false, closing:true},
            { id: 6, title: '666', accepted: false ,analyzing: false, assigned: true, closed: false, closing:false},
            { id: 7, title: '777', accepted: true ,analyzing: true, assigned: false, closed: false, closing:false},
            { id: 8, title: '888', accepted: true ,analyzing: true, assigned: false, closed: true, closing:false}
        ];
        return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls');
        //return Ember.$.getJSON('http://172.28.154.94:4200/');
        //return Ember.$.getJSON('https://www.baidu.com');
        //return Ember.$.getJSON('http://zhangwj:zhangwj123@172.28.25.81/trac/tracjobcenterm/report');
        return Ember.$.ajax({
                type: 'post',
                //url:'https://api.github.com/repos/emberjs/ember.js/pulls',
                //url:'https://www.baidu.com',
                url: "http://zhangwj:zhangwj123@172.28.25.81/trac/tracjobcenterm/rpc",
                dataType: 'jsonp',
                //jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)  
                //charset: 'UTF-8',
                //jsonpCallback:'zwj',
                contentType: 'application/json',
                date: {"params": ["WikiStart"], "method": "wiki.getPage", "id": 123},
                success:function( data ){
                    console.log( '1111111' );
                    console.log( data );
                },
                error:function(xhr,textStatus,errorThrown){
                   console.log( '22222222' );
                   console.log( 'status', xhr.status);
                   console.log( 'readyState', xhr.readyState);
                   console.log('responseText', xhr.responseText);
                   console.log('textStatus', textStatus);
                   console.log('errorThrown', errorThrown);
                },
        });
    },
});