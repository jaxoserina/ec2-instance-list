import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { EC2Service } from './ec2.service';
import { ApiService } from './api.service';
import { of } from 'rxjs';
import { APIData } from '../models';

interface SetupParams {
  mockApiGetPromise?: Promise<any>;
}
interface SetupReturnType {
  mockAPIResponse: APIData;
  ec2Service: EC2Service;
  mockApiService: jasmine.SpyObj<ApiService>;
}

function setup(params: SetupParams = {}): SetupReturnType {
  const ec2Service = TestBed.get(EC2Service);
  const mockApiService = TestBed.get(ApiService);


  if (params && params.mockApiGetPromise) {
    mockApiService.get.and.returnValue(params.mockApiGetPromise);
  }

  const mockAPIResponse = {
    data: [
      {
        InstanceId: 'i-08b83c1c428e9a1d2',
        ImageId: 'ami-8aa998ea',
        State: {
          Code:16,
          Name: 'running'
        },
        PrivateDnsName: 'ip-10-77-113-210.us-west-2.compute.internal',
        PublicDnsName: 'ec2-35-165-200-222.us-west-2.compute.amazonaws.com',
        InstanceType: 't2.micro',
        PrivateIpAddress: '10.77.113.210',
        PublicIpAddress: '35.165.200.222',
        Tags:[
          {
            Key: 'Name',
            Value: 'Fenris'
          }
        ]
      },
      {
        InstanceId: 'i-0be50217a40028a044',
        ImageId: 'ami-8ba011ea',
        State: {
          Code:80,
          Name: 'stopped'
        },
        PrivateDnsName: 'ip-10-77-118-17.us-west-2.compute.internal',
        PublicDnsName: '',
        InstanceType: 't2.medium',
        PrivateIpAddress: '10.77.118.17',
        PublicIpAddress: '35.165.200.200',
        Tags:[
          {
            Key: 'Name',
            Value: 'Heimdall'
          },
          {
            Key: 'Type',
            Value: 'Product Dev'
          }
        ]
      }
    ],
    success: true
  };

  return {
    mockAPIResponse,
    ec2Service,
    mockApiService
  };
}

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:  [
        {
          provide:  ApiService,
          useValue:  {
            get:  jasmine.createSpy('get')
          }
        },
        {
          provide:  HttpClient,
          useValue:  {
            get:  jasmine.createSpy()
          }
        }
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  describe('getInstances()', () => {

    it('should return an Observable<EC2[]>', async () => {

      const { ec2Service, mockApiService, mockAPIResponse } = setup();
      (mockApiService.get as jasmine.Spy).and.returnValue(of(mockAPIResponse));
      const actualResult = await ec2Service.getInstances('allinstances').toPromise();
      expect(actualResult).toEqual(mockAPIResponse.data);

    });
  });
});
