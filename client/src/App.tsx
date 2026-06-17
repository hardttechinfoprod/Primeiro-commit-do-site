import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import HomeV2 from "./pages/HomeV2";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Attorneys from "./pages/Attorneys";
import AttorneyProfile from "./pages/AttorneyProfile";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PracticeAreas from "./pages/PracticeAreas";
import About from "./pages/About";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/v2" component={HomeV2} />
      <Route path="/contato" component={Contact} />
      <Route path="/servicos" component={Services} />
      <Route path="/advogados" component={Attorneys} />
      <Route path="/advogado/:id" component={AttorneyProfile} />
      <Route path="/blog" component={Blog} />
      <Route path="/noticia/:id" component={BlogPost} />
      <Route path="/areas" component={PracticeAreas} />
      <Route path="/sobre" component={About} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
