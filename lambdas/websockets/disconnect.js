const Responses = require('../common/api-responses');
const Dynamo = require('../common/dynamo');

const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
  console.log('event', event);

  const { connectionId: connectionID } = event.requestContext;

  await Dynamo.delete(connectionID, tableName);

  return Responses._200({ message: 'disconnected' });
};
