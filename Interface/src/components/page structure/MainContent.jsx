import React from 'react';
import '../../styles/MainContent.sass';
import Card from '../../components/Card';
import Table from '../../components/Table';
import Create from '../../pages/create/Create';
import Read from '../../pages/read/Read';
import Update from '../../pages/update/Update';
import Delete from '../../pages/delete/Delete';
import MainMenu from '../../pages/main menu/MainMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const MainContent = () => {
  return (
    <Router>
      <main>
        <Routes>
          {/* Main Menu */}
        <Route 
            path = "/" 
            element = { <Card content = {<MainMenu/>}/>}
        />

          {/* Create */}
        <Route 
            path = "/Create" 
            element = { <Card content = {<Create/>}/>}
        />

          {/* Read */}
        <Route 
            path = "/Read" 
            element = { 
            <>
                <Card content = {<Read/>}/>
                <Table/>
            </>}
        />

          {/* Update */}
        <Route 
            path = "/Update" 
            element = { <Card content = {<Update/>}/>}
        />

          {/* Delete */}
        <Route 
            path = "/Delete" 
            element = { <Card content = {<Delete/>}/>}
        />

    
        </Routes>
      </main>
    </Router>
  )
}

export default MainContent