import React from 'react';
import {CriteriaCat} from "../components/criteria/index";

function CriteriaPage(props) {
   return (
       <div>
         <h1>So how do we know businesses are <em>actually</em> being sustainable?</h1>
         <h1>Criteria</h1>
         <p>We have conducted research on characteristics of businesses that maximize sustainbility. We have implemented a certification system to reward busineses for specific eco-friendly categories.</p>
         <CriteriaCat title="Sustainable Ingredients and Foods" content="hello"/>
       </div>
   )
}

export default CriteriaPage;