// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-2a'});
var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;

AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
        console.log("Access key:", AWS.config.credentials.accessKeyId);
        console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
    }
});


console.log("Region: ", AWS.config.region);
// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var params = {
    GroupIds: ['sg-042d080055527fc29']
};

// Retrieve security group descriptions
ec2.describeSecurityGroups(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", JSON.stringify(data.SecurityGroups));
    }
});



var params = {
    InstanceIds: ['i-0d3e97acc4141527c'],
    DryRun: false
};

console.log("Success", ec2);

ec2.describeKeyPairs(function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", JSON.stringify(data.KeyPairs));
    }
});


// Call EC2 to retrieve policy for selected bucket
/*
ec2.monitorInstances(params, function(err, data) {
    console.log("Success");
    if (err && err.code === 'DryRunOperation') {
        params.DryRun = false;
        ec2.monitorInstances(params, function (err, data) {
            if (err) {
                console.log("Error", err);
            } else if (data) {
                console.log("Success", data.InstanceMonitorings);
            }
        });
    } else {
        console.log("You don't have permission to change instance monitoring.");
    }
});*/

ec2.describeInstances(params, function(err, data) {
    if (err) {
        console.log("Error", err.stack);
    } else {
        console.log("Success", JSON.stringify(data));
    }
});

console.log("End");
