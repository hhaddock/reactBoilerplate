import React from 'react';
import {render} from 'react-dom';

import Greeting from './components/greeting.jsx'
import SignIn from './components/loginForm.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'

render(<div>
        <Header>TCI Connect</Header>
        <SignIn />
        <Footer link="http://google.com">Link 1</Footer>
        <Footer link="http://Facebook.com">Link 2</Footer>
       </div>, document.getElementById('app'));
