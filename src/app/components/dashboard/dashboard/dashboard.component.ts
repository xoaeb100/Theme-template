import { Component,OnInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as dashboardData from '../../../shared/data/dashboard/dashboard'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit(){}
  
  width = '100%';
  height = 400;
  type = "usa";
  dataFormat = "json";
  dataSource = dashboardData.data;
  
  public statusData = dashboardData.StatusData;
  public orderData = dashboardData.OrderData;
  public recentCustomersData = dashboardData.RecentCustomersData;
  public recentCustomersData1 = dashboardData.RecentCustomersData1;
  public recentCustomersData2 = dashboardData.RecentCustomersData2;
  public recentCustomersData3 = dashboardData.RecentCustomersData3;
  public recentCustomersData4 = dashboardData.RecentCustomersData4;
  public recentCustomersData5 = dashboardData.RecentCustomersData5;

  
   //Sparkline using ApexCharts
   public apexSparkline = dashboardData.apexSparkline;
   public apexSparkline1 = dashboardData.apexSparkline1;
   public apexSparkline2 = dashboardData.apexSparkline2;
   public apexSparkline3 = dashboardData.apexSparkline3;
   public apexSparkline4 = dashboardData.apexSparkline4;
 
   

}
