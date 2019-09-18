export class APIData {
  success: boolean;
  data: EC2[]
}

export class EC2 {
  InstanceId: string;
  ImageId: string;
  State: State;
  PrivateDnsName: string;
  PublicDnsName: string;
  InstanceType: string;
  PrivateIpAddress: string;
  PublicIpAddress: string;
  Tags: Tag[]
}

interface State {
  Code: number;
  Name: string;
}

interface Tag {
  Key: string;
  Value: string;
}

