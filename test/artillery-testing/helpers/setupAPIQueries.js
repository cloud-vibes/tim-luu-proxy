/* eslint-disable no-param-reassign */

module.exports.generateRandmonGraphQLQuery = (userContext, events, done) => {
    const randId = Math.floor(Math.random() * 215) * Math.floor(Math.random() * 215) * Math.floor(Math.random() * 215);
  
    const graphqlQuery = {
      query: `{
            Song(id: ${randId}) {
              relatedSongs {
                name
              plays
              image
              artist {
                  name
                image
              }
            }
            playlists {
                name
              image
            }
          }
          User(first: 10) {
              image
          }
        }`,
    };
    userContext.vars.graphJSON = graphqlQuery;
    return done();
  };
  
  module.exports.generateRandomId = (userContext, events, done) => {
    const randId = Math.floor(Math.random() * 215) * Math.floor(Math.random() * 215) * Math.floor(Math.random() * 215);
    userContext.vars.randId = randId;
    return done();
  };
  