import {Component} from '@angular/core';

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})
export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;
    
    empAll:any[]=[
        {empId:1001,empName:"RAHUL",empSalary:9000.00,empDepartment:"Java"},
        {empId:1002,empName:"VIKASH",empSalary:11000.00,empDepartment:"ORAAPS"},
        {empId:1003,empName:"UMA",empSalary:12000.00,empDepartment:"Java"},
        {empId:1004,empName:"SACHIN",empSalary:11500.00,empDepartment:"ORAAPS"},
        {empId:1005,empName:"AMOL",empSalary:7000.00,empDepartment:".NET"},
        {empId:1006,empName:"VISHAL",empSalary:17000.00,empDepartment:"BI"},
        {empId:1007,empName:"RAJITA",empSalary:21000.00,empDepartment:"BI"},
        {empId:1008,empName:"NEELIMA",empSalary:81000.00,empDepartment:"TESTING"},
        {empId:1009,empName:"DAYA",empSalary:1000.00,empDepartment:"TESTING"},
    ];  
        SortById():any{
            this.empAll=this.empAll.sort((a,b)=>(a.empId-b.empId));
        }
        SortByName():any{
            this.empAll=this.empAll.sort((a,b)=>(a.empName.localeCompare(b.empName)));
        }
        SortBySalary():any{
            this.empAll=this.empAll.sort((a,b)=>(a.empSalary-b.empSalary));
        }
        SortByDepartment():any{
            this.empAll=this.empAll.sort((a,b)=>(a.empDepartment.localeCompare(b.empDepartment)));
        }
}