import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/SearchBar'
import AddButton from './components/layout/AddButton'
import AddLogModal from './components/logs/AddLogModal'
import Logs from './components/logs/Logs'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit()
    // eslint-disable-next-line
  }, [])
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddButton />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
