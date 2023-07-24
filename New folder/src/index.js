import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {QuestionsProvider} from './context/QuestionContext'
import { UserProvider } from './context';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Fragment>
    <UserProvider>
      <QuestionsProvider>
        <App />
      </QuestionsProvider>
    </UserProvider>
  </Fragment>
);
