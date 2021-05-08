import React from "react";
import TreeFacet from './container/TreeFacet';
import Provider from './context/Provider';

function App() {

  return (
    <div>
      <Provider>
        <TreeFacet/>
      </Provider>
    </div>
  );
}

export default App;
