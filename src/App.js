import { Navbar } from './pages/global/sidebar';
import { Route, Routes } from 'react-router-dom';
import { Team } from './pages/team/team';
import Home from './pages/dashboard/home';
import Contactsinfo from './pages/contacts/contacts';
import Invoices from './pages/invoices/invoices';
import ProfileForm from './pages/profileform/profile';
import Calendar from './pages/Calendar/calendar';
import FAQ from './pages/FAQ/faq';
import Barchart from './pages/BarChart/barchart';
import Pie from './pages/PieChart/pie';
import Linechart from './pages/LineChart/linechart';
import Geography from './pages/Geography/geography';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { UseMode } from './themes';
import Header from './pages/global/header';
import { context } from './themes';
function App() {
  const [mode,colorMode] = UseMode()
  return (
  <context.Provider value={colorMode}>
    <ThemeProvider theme={mode}>
      <CssBaseline />
        <Box  position={'relative'} display={'flex'} >
            <Navbar />
            <Box p={2} width={'full'} flex={1}>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/team' element={<Team />}/>
                <Route path='/contacts' element={<Contactsinfo />}/>
                <Route path='/invoices' element={<Invoices />}/>
                <Route path='/profile' element={<ProfileForm />}/>
                <Route path='/calendar' element={<Calendar />}/>
                <Route path='/FAQ' element={<FAQ />}/>
                <Route path='/bar/chart' element={<Barchart />}/>
                <Route path='/pie/chart' element={<Pie />}/>
                <Route path='/line/chart' element={<Linechart />}/>
                <Route path='/geography' element={<Geography />}/>
              </Routes>
            </Box>
          </Box>
    </ThemeProvider>
  </context.Provider>
  );
}

export default App;
