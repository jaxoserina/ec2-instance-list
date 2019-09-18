import { Component, OnInit } from '@angular/core';
import { EC2Service } from '../services/ec2.service';
import { EC2 } from '../models';

@Component({
  selector: 'app-ec2-list',
  templateUrl: './ec2-instances-list.html',
  styleUrls: ['./ec2-instances-list.scss']
})
export class EC2InstancesListComponent implements OnInit {
  private instances: EC2[];

  constructor(
    private eC2Service: EC2Service
  ) { }

  ngOnInit() {
    this.eC2Service.getInstances('get/').subscribe((data: EC2[]) => {
      this.instances = data;
    });
  }

}
