//Written by Caner Sarigul - 17.10.2016
var customerApp = angular.module('CustomerApp', ['agGrid']);
//Initilize agGrid component
agGrid.initialiseAgGridWithAngular1(angular);

//Initilize controller for main page
customerApp.controller('CustomerController', function CustomerController($scope) {
    // Hook incoming data customer.json file
    $scope.Customers = customer;
    // Temporary variable(to keep the selected customer)
    $scope.SelectedCustomer = null;
    // Define columns of Grid
    $scope.columnDefs = [
        { headerName: "Customer Name", field: "first_name" },
        { headerName: "Customer Surname", field: "last_name" },
        { headerName: "Email", field: "email" }
    ];
    // Header of the page
    $scope.Header = "Caner Sarigul - AngularJS, JavaScript, JQuery Sample Project";
    // Keep warning messages in the scope variable 
    $scope.Warning = {
        warning1: "Please click to grid header for searching a customer.",
        warning2: "Email is sent!",
    }
    // Define Grid and its configuration,set columns,bind data
    $scope.gridOptions = {
        columnDefs: $scope.columnDefs,
        rowData: customer,
        enableFilter: true,
        rowSelection: 'single', //Single row selection
        onSelectionChanged: onSelectionChanged //Define trigger when user clicked on the row
    };
    // Implement clicked row event
    function onSelectionChanged() {
        // Get selected rows
        var selectedRows = $scope.gridOptions.api.getSelectedRows();
        var selectedRowsString = '';
        // Loop selected rows
        selectedRows.forEach(function (selectedRow, index) {
            $("#selectedCustomerName").text(selectedRow.first_name);
            $("#selectedCustomerSurname").text(selectedRow.last_name);
            $("#selectedCustomerEmail").text(selectedRow.email);
            // Set selected customer
            $scope.SelectedCustomer = selectedRow.first_name + " " + selectedRow.last_name;
        });
    };
    // simulation of mail sending
    $scope.SendMail = function () {
        alert("Email is sent: " + $scope.SelectedCustomer);
        //...
        //may call rest or ajax call for email 

    };
});

