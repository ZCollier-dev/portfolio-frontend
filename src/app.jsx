// preact-iso is the routing equivalent for preact - https://preactjs.com/guide/v10/preact-iso/

import "./app.css";

import {
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
  lazy,
} from "preact-iso";

// synchronous
import Home from "./pages/Home";
import Head from "./components/Head";
import Foot from "./components/Foot";

// asynchronous
const NotFound = lazy(() => import("./pages/NotFound"));
const Contact = lazy(() => import("./pages/Contact"));

export function App() {
  return (
    <>
      <Head />
      <LocationProvider>
        <ErrorBoundary>
          <Router>
            <Route path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
      <Foot />
    </>
  );
}
