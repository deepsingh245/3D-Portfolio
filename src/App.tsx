import AppRoutes from '@/router';
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider } from '@/hooks/useTheme';

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <AppRoutes />
    </ThemeProvider>
  );
}
