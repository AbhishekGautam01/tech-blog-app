import { library, config } from '@fortawesome/fontawesome-svg-core';
import ThemeProvider from 'providers/ThemeProvider';
import {
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(
  faList,
  faBorderAll,
  faSortNumericDown,
  faSortNumericUp,
  faSun,
  faMoon
);
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';
import 'highlight.js/styles/darcula.css';
import 'react-toggle/style.css';
export default function app({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
