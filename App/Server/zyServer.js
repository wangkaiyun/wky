/**
 * Created by Carry on 2017/10/19.
 */
app.factory('zyServer',function($http){
    return {
        getData:function(){
            return $http({
                'method':'get',
                'url':'Data/data.json'
            }).then(function(data){
                return data;
            })
        }
    }
});