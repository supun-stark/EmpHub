getAllEmployees() //call the method when the page load

function saveEmp(){
//catch and assign all the input data to variables
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let contact = $('#exampleFormControlInput4').val();
    let email = $('#exampleFormControlInput5').val();
    //print and check
    console.log(name);
    console.log(address);
    console.log(contact);
    console.log(email);

//    Send req to backend
//    use ajax for handle http requests
    $.ajax({
        method:"POST",
        contentType: "application/json",
        url:"http://localhost:8080/api/v1/employee/saveEmployees",
        async: true,
        //pass all variable data to the url
        data:JSON.stringify({
                "empId":"",
                "empName": name,
                "empAddress": address,
                "empMNumber": contact,
                "empEmail": email
        }),
        success: function(data){
            alert("Data Saved")
            getAllEmployees() //Call after new employee saved
        },
        error: function(){
             alert("Some Error")
        }
    })
}



function updateEmp(){
//catch and assign all the input data to variables
    let empId = $('#exampleFormControlInput1').val();
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let contact = $('#exampleFormControlInput4').val();
    let email = $('#exampleFormControlInput5').val();


    $.ajax({
        method:"PUT",
        contentType: "application/json",
        url:"http://localhost:8080/api/v1/employee/updateEmployee",
        async: true,
        //pass all variable data to the url
        data:JSON.stringify({
                "empId":empId,
                "empName": name,
                "empAddress": address,
                "empMNumber": contact,
                "empEmail": email
        }),
        success: function(data){
            alert("Data Updated")
            getAllEmployees() //Call after employee updated
        },
        error: function(){
             alert("Some Error")
        }
    })
}


function deleteEmp(){
//catch and assign all the input data to variables
    let empId = $('#exampleFormControlInput1').val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/api/v1/employee/deleteEmployee/"+empId,
        async: true,
        success: function(data){
            alert("Data Deleted")
            getAllEmployees() //Call after employee deleted
        },
        error: function(){
             alert("Some Error")
        }
    })
}


function getAllEmployees(){
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/employee/getAllEmployees",
        async: true,
        success: function(data){
            if(data.code ==="00"){
//            if any data in the table then clear the table
                $('#empTable').empty();

                //Catch variable
                for(let emp of data.content){
                    let empId = emp.empId
                    let name = emp.empName
                    let address = emp.empAddress
                    let contact = emp.empMNumber
                    let mail = emp.empEmail

                    var dataRow = `<tr><td>${empId}</td><td>${name}</td><td>${address}</td><td>${contact}</td><td>${mail}</td></tr>`;
//                    Row append to the table
                    $('#empTable').append(dataRow);
                }
            }
        },
        error: function(){
             alert("Some Error")
        }
    })
}


$(document).ready(function () {
    $(document).on('click', '#empTable tr', function(){
    var col0 = $(this).find('td:eq(0)').text();
    var col1 = $(this).find('td:eq(1)').text();
    var col2 = $(this).find('td:eq(2)').text();
    var col3 = $(this).find('td:eq(3)').text();
    var col4 = $(this).find('td:eq(4)').text();

     $('#exampleFormControlInput1').val(col0);
     $('#exampleFormControlInput2').val(col1);
     $('#exampleFormControlInput3').val(col2);
     $('#exampleFormControlInput4').val(col3);
     $('#exampleFormControlInput5').val(col4);

    })
})