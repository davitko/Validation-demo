var validationModule = angular.module("validationModule", []).config(function ($routeProvider, $locationProvider) {
    //Path - it should be same as href link
    $routeProvider.when("/", { templateUrl: "Templates/welcome.html", controller: "environmentalController", css: "Content/myCss/welcome.css" });
    $routeProvider.when("/welcome", { templateUrl: "Templates/welcome.html", controller: "environmentalController", css: "Content/myCss/welcome.css" });
    $routeProvider.when("/logIn", { templateUrl: "Templates/logIn.html", controller: "environmentalController", css: "Content/myCss/logIn.css" });
    $routeProvider.when("/registration", { templateUrl: "Templates/register.html", controller: "environmentalController", css: "Content/myCss/register.css" });
    $routeProvider.when("/selectSensor", { templateUrl: "Templates/sensorSelect.html", controller: "environmentalController", css: "Content/myCss/sensorSelect.css" });

    $routeProvider.when("/environmental", { templateUrl: "/Templates/environmental.html", controller: "environmentalController", css: "Content/myCss/environmental.css" });
    $routeProvider.when("/enviromentalDetails", { templateUrl: "/Templates/environmental-details.html", controller: "environmentalController", css: "Content/myCss/environmental.css" });
    $routeProvider.when("/enviromentalTroubleshoot", { templateUrl: "/Templates/environmental-details.html", controller: "environmentalController", css: "Content/myCss/troubleshoot.css" });
    $routeProvider.when("/healtCare", { templateUrl: "/Templates/healtCare.html", controller: "healtCareController", css: ["Content/myCss/environmental.css", "Content/myCss/healtCare.css"] });
    $routeProvider.when("/healtCareDetails", { templateUrl: "/Templates/healtCare-details.html", controller: "healtCareController", css: "Content/myCss/healtCare.css" });
    $locationProvider.html5Mode(true);
});