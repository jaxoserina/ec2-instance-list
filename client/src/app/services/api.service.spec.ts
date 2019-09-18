import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { of } from 'rxjs';
import { APIData } from '../models';

const mockApiResponse =[
  {
    "InstanceId":"i-08b83c1c428e9a1d2",
    "ImageId":"ami-8aa998ea",
    "State":{
      "Code":16,
      "Name":"running"
    },
    "PrivateDnsName":"ip-10-77-113-210.us-west-2.compute.internal",
    "PublicDnsName":"ec2-35-165-200-222.us-west-2.compute.amazonaws.com",
    "StateTransitionReason":"",
    "KeyName":"Security1",
    "AmiLaunchIndex":0,
    "ProductCodes":[

    ],
    "InstanceType":"t2.micro",
    "LaunchTime":"2017-02-14T14:59:11.000Z",
    "Placement":{
      "AvailabilityZone":"us-west-2b",
      "GroupName":"",
      "Tenancy":"default"
    },
    "Monitoring":{
      "State":"disabled"
    },
    "SubnetId":"subnet-228da755",
    "VpcId":"vpc-af0f0dca",
    "PrivateIpAddress":"10.77.113.210",
    "PublicIpAddress":"35.165.200.222",
    "Architecture":"x86_64",
    "RootDeviceType":"ebs",
    "RootDeviceName":"/dev/sda1",
    "BlockDeviceMappings":[
      {
        "DeviceName":"/dev/sda1",
        "Ebs":{
          "VolumeId":"vol-00e55d6bf114bfcaa0",
          "Status":"attached",
          "AttachTime":"2017-02-09T15:37:34.000Z",
          "DeleteOnTermination":true
        }
      }
    ],
    "VirtualizationType":"hvm",
    "ClientToken":"vOiiS1486654656072",
    "Tags":[
      {
        "Key":"Name",
        "Value":"Fenris"
      }
    ],
    "SecurityGroups":[
      {
        "GroupName":"launch-wizard-2",
        "GroupId":"sg-2312072c"
      }
    ],
    "SourceDestCheck":true,
    "Hypervisor":"xen",
    "EbsOptimized":false
  },
  {
    "InstanceId":"i-0be50217a40028a044",
    "ImageId":"ami-8ba011ea",
    "State":{
      "Code":80,
      "Name":"stopped"
    },
    "PrivateDnsName":"ip-10-77-118-17.us-west-2.compute.internal",
    "PublicDnsName":"",
    "StateTransitionReason":"User initiated (2016-12-05 16:49:45 GMT)",
    "KeyName":"Security3",
    "AmiLaunchIndex":0,
    "ProductCodes":[

    ],
    "InstanceType":"t2.medium",
    "LaunchTime":"2016-12-02T15:50:08.000Z",
    "Placement":{
      "AvailabilityZone":"us-west-2b",
      "GroupName":"",
      "Tenancy":"default"
    },
    "Monitoring":{
      "State":"disabled"
    },
    "SubnetId":"subnet-228da700",
    "VpcId":"vpc-af0f1ccb",
    "PrivateIpAddress":"10.77.118.17",
    "PublicIpAddress":"35.165.200.200",
    "StateReason":{
      "Code":"Client.UserInitiatedShutdown",
      "Message":"Client.UserInitiatedShutdown: User initiated shutdown"
    },
    "Architecture":"x86_64",
    "RootDeviceType":"ebs",
    "RootDeviceName":"/dev/sda1",
    "BlockDeviceMappings":[
      {
        "DeviceName":"/dev/sda1",
        "Ebs":{
          "VolumeId":"vol-1c211ac8",
          "Status":"attached",
          "AttachTime":"2016-11-22T01:54:52.000Z",
          "DeleteOnTermination":true
        }
      }
    ],
    "VirtualizationType":"hvm",
    "ClientToken":"RQbhg1479762230132",
    "Tags":[
      {
        "Key":"Name",
        "Value":"Heimdall"
      },
      {
        "Key":"Type",
        "Value":"Product Dev"
      }
    ],
    "SecurityGroups":[
      {
        "GroupName":"LinuxAPIdev",
        "GroupId":"sg-5ea11777"
      }
    ],
    "SourceDestCheck":true,
    "Hypervisor":"xen",
    "EbsOptimized":false
  }
];


describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        {
          provide: HttpClient,
          useValue: {
            get: jasmine.createSpy().and.returnValue(of(mockApiResponse))
          }
        }
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  describe('get()', () => {

    it('should return an Observable<any | any[]>', inject([ApiService], (service: ApiService) => {
      service.get('random').subscribe((response: APIData) => {
        expect(response.data.length).toBe(2);
      });
    }));
  });
});
