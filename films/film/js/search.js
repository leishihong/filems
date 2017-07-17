/**
 * Created by Administrator on 2017/4/24.
 */
angular.module('myApp')
    .config(function($stateProvider,$urlRouterProvider){
        //路由重定向为首页
        $urlRouterProvider.otherwise('home')
        $stateProvider
            .state({
                name:'search',
                url:'/search',
                templateUrl:'view/search.html',
                params:{
                    id:null
                },
                controller:'mycont'
            })
            .state({
                name:'home',
                url:'/home',
                templateUrl:'view/home.html'
            })
    })
    .controller('mycont',function($scope,$state){
        $scope.backs=function(){
            $state.go('home')
        }
        //绑定一个键盘函数 传一个输入的值
        $scope.judge=function(num){
                //搜索内容多容器
            var   content=document.getElementById('content'),
                //默认电影排列
                hotFilm=document.getElementById('hot-film');
            if(num!=""){//内容不为空的时候做这些操作
                var str='';
                for(var i=0;i<$scope.data.length;i++){
                    var name=$scope.data[i].tit;
                    var reg = new RegExp(num,'g');
                    //判断标题里有 或者内容里有 搜索的num关键字 就显示
                    if($scope.data[i].tit.indexOf(num)>=0 ||$scope.data[i].content.indexOf(num)>=0){
                        str+='<dl>'+
                                '<dt><img src="images/'+$scope.data[i].img+'"></dt>'+
                                '<dd>'+
                                    '<h2>'+$scope.data[i].tit+'</h2>'+
                                    '<p>'+$scope.data[i].content+'</p>'+
                                '</dd>'+
                            '</dl>';
                    }

                    content.innerHTML=str;
                    //正则匹配content里的所有内容有num的包一个span标签
                    content.innerHTML = content.innerHTML.replace(reg,'<span class="reds">'+num+'</span>')
                    hotFilm.style.display="none";
                }
            }else{
                content.innerHTML='';
                hotFilm.style.display="block";
            }
        }
    })
