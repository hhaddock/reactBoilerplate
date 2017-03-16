import React from 'react';
import {render} from 'react-dom';

import Greeting from './components/greeting.jsx'
import SignIn from './components/loginForm.jsx'
import Footer from './components/footer.jsx'


render(<div>
          <Greeting user="Hayden" />
          <SignIn />
          <Footer link="http://google.com">Google</Footer>{" "}
          <Footer link="http://Facebook.com">Facebook</Footer>
       </div>, document.getElementById('app'));
