import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ResortService } from '../service/resort.service';

@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.scss'],
})
export class ResortListComponent implements OnInit {
  resortListArr: any[];
  totalRecords = 0;
  myControl = new FormControl();
  resortViewSub: Subscription;

  constructor(
    private resortService: ResortService // private resortService: ResortService, // private asyncService: AsyncService, // private commonService: CommonService
  ) {}

  ngOnInit(): void {
    // this.commonService.setUiInfo({
    //   refresh: this.getResortList,
    //   title: 'Resort List',
    // });
    this.getResortList();
  }

  getResortList() {
    // this.asyncService.start();
    this.resortViewSub = this.resortService.resortList().subscribe((data) => {
      if (data && data.data.length) {
        this.resortListArr = data.data;
        // console.log(data);
        // this.resortListArr = Array.of(this.resortListArr);
        this.totalRecords = this.resortListArr.length;
        console.log(this.resortListArr);
      }
      // this.asyncService.finish();
    });
  }

  deleteItem(id: string): void {}
}
