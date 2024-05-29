import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import './index.css';

import 'sequential/css/designer.css';
import 'sequential/css/designer-light.css';
import 'sequential/css/designer-dark.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
		<App />
);
