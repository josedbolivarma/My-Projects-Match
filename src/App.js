import { AppRouter } from './routes';
import { AuthProvider } from './context/auth';
import {AppLanding} from "./pages/AppLading/AppLanding"

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
