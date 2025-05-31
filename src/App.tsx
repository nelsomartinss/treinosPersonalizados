import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './screens/SignIn';
import PasswordReset from './screens/PasswordReset'; 
import Menu  from './screens/Menu'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}
export default App;