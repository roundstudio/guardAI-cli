import { BrowserRouter } from "react-router-dom";
import Router from "./routes/section";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from "@emotion/react";
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import 'react-toastify/dist/ReactToastify.css';


// ایجاد تم با راست‌چین
const theme = createTheme({
  direction: 'rtl', // راست‌چین کردن
});

const App = () => {
  const queryClient = new QueryClient();

  // ایجاد کش برای راست‌چین
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}> {/* استفاده از CacheProvider */}
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
