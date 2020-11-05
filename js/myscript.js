const URL="https://covid19.mathdro.id/api";
let app = angular.module("MyApp", []);

app.controller("MyCtrl", ($scope, $http) => {
    //controller
    $scope.title = "Stay home Stay Safe" ;

    console.log("APP Loaded");


    $http.get(URL).then(
         (response) => { 
             console.log(response.data)
             $scope.all_data = response.data 
        },
         (error) => {
             console.log(error)
        }
    );

    $scope.get_c_data = () => {
        let country = $scope.c;
        console.log(country)
        if (country==''){
            $scope.c_data = undefined;
            return;
        }

    $http.get(`${URL}/countries/${country}`)
    .then( (response) => {
        $scope.c_data = response.data
    } , (error) => {
        console.log(error)
    }
    );
}
    
});