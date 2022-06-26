import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { Home } from './containers/Home';
import { Book } from './containers/Book';
import { Trip } from './containers/Trip';
import App from './containers/App';
import * as routes from './routes';
import { theme } from './theme/theme';
import { store } from './redux/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path={routes.tripRoute} element={<Trip />} />
                        <Route path={routes.bookRoute} element={<Book />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    </Provider>
, document.getElementById('root'));
