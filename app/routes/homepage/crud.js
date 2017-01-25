//  app/routes/homepage/crud.js

import Ember from 'ember';

export default Ember.Route.extend({
	    model: function () {
        return [
   {
      "id" : "1",
      "bug_date" : "2010/05/10",
      "cost": "9",
      "deadline": "2010/05/17",
      "owner" : "tangxc",
      "status" : "closed",
      "Summary" : "[necas-support:01317] 【調査依頼】CSC:1005006858:JobCenterで使用するユーザについて",
      "priority" : ""
   },
   {
      "id" : "2",
      "bug_date" : "2010/05/13",
      "cost": "8",
      "deadline": "2010/05/14",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:01334] 【調査依頼】CSC:1005012033:JobCenter MG R12.8.1 稼働日カレンダが正常に配布されない",
      "priority" : ""
   },
   {
      "id" : "3",
      "bug_date" : "2010/03/01",
      "cost": "21",
      "deadline": "2010/04/01",
      "owner" : "tangxc",
      "status" : "closed",
      "Summary" : "[necas-support:00866] 【急ぎ】【調査依頼】Re: CSC:1003000627:JobCenter:キュー一覧の取得に失敗する",
      "priority" : ""
   },
   {
      "id" : "4",
      "bug_date" : " 	2010/03/04",
      "cost": "20",
      "deadline": "2010/04/01",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:00889] 【調査依頼】CSC:1003011319:comagentダウン",
      "priority" : ""
   },
   {
      "id" : "5",
      "bug_date" : "2010/03/19",
      "cost": "8",
      "deadline": "2010/03/24",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:00972] 【調査依頼】CSC:1003045345:[連絡CSC→DIV]:JobCenterR12.6.1 ジョブ実行不具合",
      "priority" : ""
   },
   {
      "id" : "6",
      "bug_date" : "2010/04/27",
      "cost": "8",
      "deadline": "2010/04/28",
      "owner" : "tangxc",
      "status" : "closed",
      "Summary" : "[necas-support:01234] Re:【調査依頼】 CSC:1004062878:[連絡CSC→DIV]:4613643637「comagent.exeがダウンする」",
      "priority" : ""
   },
   {
      "id" : "8",
      "bug_date" : "2010/05/19",
      "cost": "18",
      "deadline": "2010/05/20",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:01355] 【急ぎ】【調査依頼】 CSC:1005027105:R12.8.1フェイルオーバ中に実行されたジョブがRUNのままになる",
      "priority" : ""
   },
   {
      "id" : "9",
      "bug_date" : "2010/05/20",
      "cost": "11",
      "deadline": "2010/05/21",
      "owner" : "tangxc",
      "status" : "closed",
      "Summary" : "[necas-support:01361] 【調査依頼】 CSC:1005026788:クラスタ環境でフェールバック時にジョブキューが消失してしまう",
      "priority" : ""
   },
   {
      "id" : "10",
      "bug_date" : "2010/05/25",
      "cost": "18",
      "deadline": "2010/05/27",
      "owner" : "jiy",
      "status" : "closed",
      "Summary" : "JobCenterR12.6.1 jnwengineサービスが起動しない",
      "priority" : ""
   },
   {
      "id" : "11",
      "bug_date" : "2010/05/26",
      "cost": "35",
      "deadline": "2010/06/02",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:01383] Re: 【調査依頼】CSC:1004015409:[連絡CSC→DIV]:イベント送信部品にてエラー",
      "priority" : ""
   },
   {
      "id" : "12",
      "bug_date" : "2010/05/27",
      "cost": "42",
      "deadline": "2010/",
      "owner" : "tangxc",
      "status" : "closed",
      "Summary" : " [necas-support:01390] 【調査依頼】 CSC:1005026788:クラスタ環境でフェールバック時にジョブキューが消失してしまう件 ",
      "priority" : "普通"
   },
   {
      "id" : "13",
      "bug_date" : "2010/05/28",
      "cost": "4",
      "deadline": "2010/06/04",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:01396] 【大至急】【調査依頼】【CSC:1005014440】 MG/SVのバージョンアップについて",
      "priority" : "至急"
   },
   {
      "id" : "14",
      "bug_date" : "2010/05/31",
      "cost": "16",
      "deadline": "2010/06/02",
      "owner" : "tangxc",
      "status" : "closed",
      "Summary" : "[necas-support:01409] 【調査依頼】CSC:1005062090:(JobCenter)JC/SVのディスク使用容量増加に関する質問",
      "priority" : ""
   },
   {
      "id" : "15",
      "bug_date" : "2010/06/01",
      "cost": "20",
      "deadline": "2010/06/08",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:01417] 【至急】【調査依頼】CSC:1005060836:[全社IT](JobCenter)「ジョブネットワークの即時投入に失敗しました(5/28)」",
      "priority" : "至急"
   },
   {
      "id" : "16",
      "bug_date" : "2010/06/01",
      "cost": "6",
      "deadline": "2010/6/8",
      "owner" : "liyy",
      "status" : "closed",
      "Summary" : "[necas-support:01419] 【調査依頼】CSC:1005059960:JObCenter単位ジョブのパラメータ リスタートについて",
      "priority" : ""
   },
   {
      "id" : "17",
      "bug_date" : "2010/06/02",
      "cost": "6",
      "deadline": "2010/06/09",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:01452] 【至急】【調査依頼】CSC:1006003819:JobCenter 12.8 JC/MGサーバでアプリケーションエラーが発生している件（の関連）",
      "priority" : "至急"
   },
   {
      "id" : "19",
      "bug_date" : "2010/06/04",
      "cost": "29",
      "deadline": "2010/06/11",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:01490] 【調査依頼】CSC:1006002003:JobCenter:追加したドメインユーザでログインできない",
      "priority" : ""
   },
   {
      "id" : "21",
      "bug_date" : "2010/06/04",
      "cost": "11",
      "deadline": "2010/06/11",
      "owner" : "tangxc",
      "status" : "closed",
      "Summary" : "[necas-support:01491] 【調査依頼】JobCenter R12.5 プログラム実行サーバ間の連携が取れない",
      "priority" : ""
   },
   {
      "id" : "22",
      "bug_date" : "2010/06/07",
      "cost": "13",
      "deadline": "2010/06/17",
      "owner" : "tangxc",
      "status" : "closed",
      "Summary" : "[necas-support:01511] 【調査依頼】 Re: CSC:1006004847:Jobcenterのタイムアウトについて",
      "priority" : ""
   },
   {
      "id" : "23",
      "bug_date" : "2010/06/11",
      "cost": "14",
      "deadline": "2010/06/22",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:01552] 【調査依頼】CSC:1006022162:JobCenter R12.8.2 アクセス拒否エラーのメッセージが発生する",
      "priority" : ""
   },
   {
      "id" : "24",
      "bug_date" : "2010/06/17",
      "cost": "4",
      "deadline": "2010/06/23",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "「予定（確定）」のトラッカ「エラーの場所から再実行」と「エラーの場所をSkip」メニューは有効",
      "priority" : ""
   },
   {
      "id" : "26",
      "bug_date" : "2010/06/17",
      "cost": "15",
      "deadline": "2010/06/24",
      "owner" : "tangxc",
      "status" : "closed",
      "Summary" : "[necas-support:01589] 【調査依頼】CSC:1006045116:[作業CSC→DIV]:CSCNEWC:8010003035 HPCaseID4615863291 jnwsubmitcmdがエラーコード5で終了",
      "priority" : ""
   },
   {
      "id" : "27",
      "bug_date" : "2010/06/18",
      "cost": "6",
      "deadline": "2010/06/25",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:01607] 【調査依頼】CSC:1006025835:JobCenter ジョブが未実行となる障害",
      "priority" : ""
   },
   {
      "id" : "28",
      "bug_date" : "2010/06/18",
      "cost": "30",
      "deadline": "2010/06/25",
      "owner" : "liuc",
      "status" : "closed",
      "Summary" : "[necas-support:01612] 【至急】【調査依頼】CSC:1006045666::JobCenter/MGからジョブの投入に度々失敗する",
      "priority" : "至急"
   },
   {
      "id" : "29",
      "bug_date" : "2010/06/18",
      "cost": "48",
      "deadline": "2010/07/02",
      "owner" : "liyy",
      "status" : "closed",
      "Summary" : "[necas-support:01625] 【調査依頼】CSC:1006044300:JobCenter 12.7 エラー「Request could not be routed.」が出力される",
      "priority" : ""
   },
   {
      "id" : "30",
      "bug_date" : "2010/06/21",
      "cost": "6",
      "deadline": "2010/06/21",
      "owner" : "yang",
      "status" : "closed",
      "Summary" : "[necas-support:01644] 【調査依頼】CSC:1006050837:WebSAM JobCenter R12.8.2 実行済みのトラッカーが予定で表示される",
      "priority" : ""
   },
   {
      "id" : "39",
      "bug_date" : "2010/06/30",
      "cost": "8",
      "deadline": "2010/07/06",
      "owner" : "liuc",
      "status" : "closed",
      "Summary" : "[necas-support:01767] [緊急調査依頼]エラー停止状態のERPジョブがスキップできない",
      "priority" : ""
   },
   {
      "id" : "58",
      "bug_date" : "2010/08/25",
      "cost": "16",
      "deadline": "2010/09/01",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:02144] Re: 【大至急調査依頼】データ受信後、いきなりRSTが出る",
      "priority" : "大至急"
   },
   {
      "id" : "123",
      "bug_date" : "2011/01/05",
      "cost": "20",
      "deadline": "2011/01/12",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:03241] 【大至急】【調査依頼】CSC:1101003871:JobCenterが実行中のまま応答しない",
      "priority" : "大至急 "
   },
   {
      "id" : "167",
      "bug_date" : "2011/03/01",
      "cost": "14",
      "deadline": "2011/03/08",
      "owner" : "mawz",
      "status" : "closed",
      "Summary" : "[necas-support:03922] 【緊急】【調査依頼】CSC:1103000177：単位ジョブの転送に失敗した",
      "priority" : ""
   }
];
        
        
        return [
            { "id": "1", "title": "111", accepted: true,analyzing: true, assigned: true, closed: false, closing:false},
            { "id": "2", "title": "222", accepted: true,analyzing: false, assigned: false, closed: true, closing:false},
            { "id": "3", "title": "333", accepted: true ,analyzing: true, assigned: false, closed: false, closing:true},
            { "id": "4", "title": "444", accepted: false ,analyzing: true, assigned: false, closed: true, closing:false},
            { "id": "5", "title": "555", accepted: true ,analyzing: true, assigned: false, closed: false, closing:true},
            { "id": "6", "title": "666", accepted: false ,analyzing: false, assigned: true, closed: false, closing:false},
            { "id": "7", "title": "777", accepted: true ,analyzing: true, assigned: false, closed: false, closing:false},
            { "id": "8", "title": 888, accepted: true ,analyzing: true, assigned: false, closed: true, closing:false}
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