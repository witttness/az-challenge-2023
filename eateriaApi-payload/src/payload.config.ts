import { buildConfig } from 'payload/config';
import path from 'path';
import Media from './collections/Media';
import Users from './collections/Users';
import MenuItems from './collections/MenuItem';
// import Site from './globals/Site';

export default buildConfig({
  serverURL: process.env.PUBLIC_URL,
  admin: {
    user: Users.slug,
  },
  // globals: [
  //   Site,
  // ],
  collections: [
    Users,
    MenuItems,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    // disable: true,
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  indexSortableFields: true, // necessary for Cosmos
  cors: '*'
  // cors: ['http://localhost:4200', 'https://wonderful-coast-04bce0d0f.3.azurestaticapps.net']
})
