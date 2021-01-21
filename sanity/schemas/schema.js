// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Schemas
// documents
import storeNews from './documents/storeNews';
import storeBrands from './documents/storeBrands';
import winkel from './documents/winkel';
// objects
import storeInfo from './objects/storeInfo';
import storeContact from './objects/storeContact';
import openHour from './objects/openHour';
import socialMediaLink from './objects/socialMediaLink';
import portableText from './objects/portableText';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    storeContact,
    storeInfo,
    storeNews,
    storeBrands,
    openHour,
    socialMediaLink,
    winkel,
    portableText,
  ]),
});
