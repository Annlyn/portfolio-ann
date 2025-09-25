import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import { ProjectDetail } from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";


const App = () => (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
);

export default App;
