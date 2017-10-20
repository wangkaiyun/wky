/**
 * Created by Carry on 2017/10/19.
 */

app.controller('zyController',['$scope','zyServer',function($scope,zyServer){
    zyServer.getData().then(function(result){
        $scope.objs = result.data;

    })
}]);