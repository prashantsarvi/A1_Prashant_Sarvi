import { Layout } from 'antd';
import AppMainHeader from './AppMainHeader.js';
import AppContent from './AppContent.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Layout className="layout">
                <AppMainHeader/>
                <AppContent/>
            </Layout>
        </Router>
    </div>
  );
}

export default App;
