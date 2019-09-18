import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EC2InstancesListComponent } from '../ec2-instances-list/ec2-instances-list';

const routes: Routes = [
  {
    path: '',
    component: EC2InstancesListComponent
  },
  {
    path: 'ec2',
    component: EC2InstancesListComponent
  },
  {
    path: '**',
    redirectTo: 'ec2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
