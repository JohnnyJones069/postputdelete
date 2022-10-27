import './App.scss';
import {Route, Routes} from 'react-router-dom';

// Public
import Layout from './layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

// Admin
import AdminLayout from './admin/AdminLayout/AdminLayout';
import AdminHome from './admin/AdminHome';
import AdminTours from './admin/AdminTours';
import Login from './admin/Login';
import NoMatch from './admin/NoMatch';
import AdminToursCreate from './admin/AdminToursCreate';
import AdminToursEdit from './admin/AdminToursEdit';
import AdminAbout from './admin/AdminAbout';
import SearchResult from './admin/SearchResult';
import Tours from './admin/Tours';

function App() {
  return (
    <div className="App">

      {/* BrowserRouter ligger i index.js */}
      {/* LoginContextProvider ligger i index.js */}

      <Routes>

        {/* Public */}
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="omos" element={<About />} />
          <Route path="tours" element={<Tours />} />
          <Route path="login" element={<Login />} />
          <Route path="searchresult/:q" element={<SearchResult />} />
          <Route path="*" element={<NoMatch />} />
        
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="admintours" element={<AdminTours />} />
          <Route path="admintoursopret" element={<AdminToursCreate />} />
          <Route path="admintoursret/:ID" element={<AdminToursEdit />} />
          <Route path="adminabout" element={<AdminAbout />} /> 
          <Route path="*" element={<NoMatch />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
