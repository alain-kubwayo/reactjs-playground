import UseContextComponent from "./components/UseContextComponent";
import UseContextPractice from "./components/UseContextPractice";
import UseEffectComponent from "./components/UseEffectComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";

import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";
import UseMemoComponent from "./components/UseMemoComponent";
import UseCallbackComponent from "./components/UseCallbackComponent";

function App() {
  return (
    <div>
      {/* <UseStateComponent />
      <UseEffectComponent />
      <ThemeProvider>
        <UseContextComponent />
      </ThemeProvider>
      <AuthProvider>
        <UseContextPractice />
      </AuthProvider>
      <UseRefComponent />
      <UseMemoComponent /> */}
      <UseCallbackComponent />
    </div>
  );
}

export default App;
