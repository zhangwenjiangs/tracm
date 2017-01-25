import Ember from 'ember';

export default Ember.Route.extend({
        model: function () {
        //return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls');
        //return Ember.$.getJSON('http://172.28.154.94:4200/');
        //return Ember.$.getJSON('https://www.baidu.com');
        //return Ember.$.getJSON('http://zhangwj:zhangwj123@172.28.25.81/trac/tracjobcenterm/report');

        return Ember.$.ajax({
                type: 'get',
                url: "http://zhangwj:zhangwj123@172.28.25.81/trac/tracjobcenterm/rpc",
                dataType: 'json',
                //jsonpCallback:'zwj',
                contentType: 'application/json',
                data: {"params": ["status!=closed"], "method": "ticket.query" , "id": 123},
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

