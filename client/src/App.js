import React from 'react';
import {fetchUtils,Admin,Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';

/*const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ 
          'Accept': 'application/json',
          'X-Total-Count':'30',
          'Access-Control-Expose-Headers': 'X-Total-Count'
           });
    }
    // add your own headers here
    options.headers.set('X-Custom-Header', 'foobar');
    return fetchUtils.fetchJson(url, options);
};
*/
function App() {
  return( 
  <Admin dataProvider={restProvider('http://localhost:3000'           )}>
    <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit}/>
  </Admin>
  )
}

export default App;
