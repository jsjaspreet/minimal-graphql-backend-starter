import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema';

const port = process.env.PORT || 8181;
const nodeEnv = process.env.NODE_ENV || 'development';

const app = express();
app.use(cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

if (nodeEnv !== 'production') {
  app.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL: '/graphql' }));
}

app.listen(port, () => console.log(`App running on port ${port}`));