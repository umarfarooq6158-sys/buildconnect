import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Professionals from './pages/Professionals';
import ProfessionalDetails from './pages/ProfessionalDetails';
import Suppliers from './pages/Suppliers';
import PostProject from './pages/PostProject';
function NotFound(){return <main className="inner-page"><div className="container empty-state"><h1>Page not found</h1><p>The page you're looking for doesn't exist.</p><a href="/" className="button button-primary">Back home</a></div></main>}
export default function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/professionals" element={<Professionals/>}/><Route path="/professionals/:id" element={<ProfessionalDetails/>}/><Route path="/suppliers" element={<Suppliers/>}/><Route path="/post-project" element={<PostProject/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>}
