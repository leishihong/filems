/**
 * Created by Administrator on 2017/4/24.
 */
angular.module('myApp')
    .run(function($rootScope,$http){
    	//请求数据
        $http.get('json/film.json')
            .then(function(data){
            	//放在全局rootScope
                $rootScope.data=data.data.film;
            })
    })