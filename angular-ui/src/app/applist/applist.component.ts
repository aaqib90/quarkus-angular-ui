import { Component, OnInit } from '@angular/core';
import { AllappService } from '../services/applist.service';

@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.css']
})
export class ApplistComponent implements OnInit {

  constructor( public allappService: AllappService) {}
  issueData: any = [];
  issueDataTotalCount: Number = 0;

  ngOnInit(): void {
    this.generateIssueTable('mandatory');
  }

  generateIssueTable (issueName) {
    this.issueData = [];
    this.issueDataTotalCount = 0;
    this.allappService.issueCategoryList(issueName).subscribe((data) => {
      console.log(data);
      if(data && data[0] && data[0].title) {
        this.issueData = data[0].title;
        this.issueDataTotalCount = this.issueData.length;
        console.log(this.issueData);
      } else {
        this.issueData = [];
        this.issueDataTotalCount =0;
      }
    });
  }

  navClick(event: any) {
    //alert()
    console.log(event.target.value);
    this.generateIssueTable(event.target.value);
  }

}
