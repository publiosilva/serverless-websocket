const AWS = require('aws-sdk');

const create = (domainName, stage) => {
  const endpoint = `${domainName}/${stage}`;

  return new AWS.ApiGatewayManagementApi({
    apiVersion: '2020-06-14',
    endpoint
  });
};

const send = ({ domainName, stage, connectionID, message }) => {
  const ws = create(domainName, stage);

  const postParams = {
    Data: message,
    ConnectionId: connectionID
  };

  return ws.postToConnection(postParams).promise();
};

module.exports = {
  send
};
