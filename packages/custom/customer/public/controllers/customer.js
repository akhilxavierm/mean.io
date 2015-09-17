/** customer controller.js **/

'use strict';

angular.module('mean.customer').controller('CustomerController', ['$scope', 'Global', 'Customer','$http',
    function($scope, Global, Customer,$http) {
   
    $scope.submitted = false;
    $scope.reset = function ()  {
        
        $scope.customer= {
        name :"",
        customerName :"",
        addressLine1 :"",
        addressLine2 :"",
        email :"",
        phone :"",
        mobile :"",
        googlePlace :""
        };
        document.getElementById('autocomplete').value=null ;
        $scope.submitted = false;
    }

    $scope.submitForm = function (isValid)  {

        $scope.customer.googlePlace=document.getElementById('autocomplete').value;
    	if(isValid){
            console.log("values--"+JSON.stringify($scope.customer));
    		var res = $http.post('/api/customer/save', $scope.customer);
			res.success(function(data, status, headers, config) {
				alert("sucess"+JSON.stringify(data));
                $scope.reset();
			});
			res.error(function(data, status, headers, config) {
				alert( "failure message: " + JSON.stringify({data: data}));
			});	
    	}
    	else{
    		alert("not valid");
            $scope.submitted = true;
    	}
    };
    $scope.reset();
}
]);
