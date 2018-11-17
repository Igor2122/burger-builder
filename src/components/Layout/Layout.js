import React from 'react';
import Aux from '../../hoc/Aux'
// <> - auxilary wrapping component
const layout = (props) => (
   <> 
   <div>Toolbar, Sidedrawer, Backdrop</div>
   <main>
      {props.children}
   </main>
   </>
);

export default layout;