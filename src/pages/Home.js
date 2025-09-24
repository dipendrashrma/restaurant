import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom';
import Banner from "../Images/Banner.jpg"
import "../styles/HomeStyles.css";
const Home = () => {
  return (
    <Layout>
   
        <div className='home' style={{backgroundImage:`url(${Banner})`}}>
          <div className='headercontainer'>
               <h1>Resturant</h1>
               <p>Best Resturant in Ktm</p>
               <Link  to= "/Menu">
               
                  <button>
                    ORDER NOW
                  </button>
               </Link>
          </div>
           
        </div>
    </Layout>
  );
};

export default Home
