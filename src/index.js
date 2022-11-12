import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import * as dotenv from 'dotenv';
dotenv.config();

ReactDOM.render(<AppRouter />, document.getElementById('root'));
