import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kkyungvelyy from 'routes/Kkyungvelyy';
import Laravel from 'routes/Laravel';
import React from 'routes/React';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Routes(v6) / Switch(v5)
// <Route path="/" element={<Navigate replace to="/kkyungvelyy" />} />
const rootNode = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

rootNode.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/kkyungvelyy" element={<Kkyungvelyy />} />
        <Route path="/laravel" element={<Laravel />} />
        <Route path="/react" element={<React />} />
        <Route
          path="*"
          element={
            <main style={{ textAlign: 'center' }}>
              <p>404</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();
