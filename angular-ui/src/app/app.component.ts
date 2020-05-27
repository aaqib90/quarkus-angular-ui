import { Component, OnInit } from '@angular/core';
import { EmployeeCrudService } from 'src/app/services/employee-crud.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'quarkus-ui';
  employeesList: any;
  empId: number;
  empName: string;
  empSal: number;
  empAge: number;
  loginSuccess: boolean;
  respId: string;
  buttonClass: string;

  alertBox: boolean = false;
  updateForm: boolean = false;

  _mysql :string = 'mysql';
  _mongodb : string = 'mongodb';

  currentTab: string = 'mysql';

  activeMongodbClass:string;
  activeMysqlClass:string;

  constructor(public empCrud: EmployeeCrudService) { }

  ngOnInit() {
    this.showEmployeeList(this._mysql);
    this.activeMysqlClass = "active";
  }

  switchTab(val) {
    if(val === 'mongodb') {
      this.currentTab = 'mongodb';
      this.showEmployeeList(this._mongodb);
      this.activeMongodbClass = "active";
      this.activeMysqlClass = "";
    } else {
      this.currentTab ='mysql';
      this.showEmployeeList(this._mysql);
      this.activeMysqlClass = "active";
      this.activeMongodbClass = "";
    }
  }


  showEmployeeList(dbName) {
    this.empCrud.employeeList(dbName).subscribe((data) => {
      this.employeesList = data.data;
      console.log(this.employeesList);
    }, error => {
      console.log(error);
    });
  }

  empDetailsForm = new FormGroup({
    empname: new FormControl('', [Validators.required]),
    empID: new FormControl('', [Validators.required]),
    empage: new FormControl('', [Validators.required]),
  });

  IsInvalid() {
    if (this.empDetailsForm.valid) {
      return false;
    } else {
      return true;
    }
  }

  closePopup() {
    this.empDetailsForm.reset();
    this.alertBox = false;
  }

  addEmployee() {
    var request = {
      "employee_name": this.empDetailsForm.value.empname,
      "id": this.empDetailsForm.value.empID,
      "employee_age": this.empDetailsForm.value.empage,
      "profile_image": ''
    }
    console.log("request", request);

    const dbName = this.currentTab;

    if (this.empDetailsForm.valid) {
      this.empCrud.employeeAdd(dbName, request).subscribe(employeeAddResponse => {
        console.log("employeeAddResponse", employeeAddResponse);
        console.log("Form Submitted!");
        this.showEmployeeList(dbName);
        this.closePopup();
        return employeeAddResponse;
      }, error => {
        console.log(error);
      });
    }
  }

  updateEmpPopup(empObj) {
    this.alertBox = true;
    this.updateForm = true;
    var id = empObj.id;
    var name = empObj.employee_name;
    var age = empObj.employee_age;
    console.log(id, name, age);
    this.empDetailsForm.setValue({
      empID: id,
      empname: name,
      empage: age
    });
  }

  updateEmployee(id) {
    var request = {
      "employee_name": this.empDetailsForm.value.empname,
      "id": this.empDetailsForm.value.empID,
      "employee_age": this.empDetailsForm.value.empage,
      "profile_image": ''
    }
    console.log("request", request);
    console.log("ID", id);
    if (this.empDetailsForm.valid) {
      this.empCrud.employeeUpdate(this.currentTab ,id, request).subscribe(employeeUpdateResponse => {
        console.log("employeeUpdateResponse", employeeUpdateResponse);
        console.log("Updated Submitted!");
        this.showEmployeeList(this.currentTab);
        this.closePopup();
        this.updateForm = false;
        return employeeUpdateResponse;
      }, error => {
        console.log(error);
        this.updateForm = false;
      });
    }
  }

  addOrUpdate() {
    if (this.updateForm == true) {
    this.updateEmployee(this.empDetailsForm.value.empID);
    }
    else {
      this.addEmployee();
    }
  }

  deleteEmployee(id) {
    this.empCrud.employeeDelete(this.currentTab, id).subscribe(employeeDeleteResponse => {
      console.log(employeeDeleteResponse);
      this.showEmployeeList(this.currentTab);
      return employeeDeleteResponse;
    }, error => {
      console.log(error);
    });
  }

  showPopup() {
    this.alertBox = true;
  }


}
