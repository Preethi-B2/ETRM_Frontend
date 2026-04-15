import { useState } from "react";
import { COLORS, FONTS } from "./styles/theme";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Step1 } from "./components/steps/Step1";
import { Step2 } from "./components/steps/Step2";
import { Step3 } from "./components/steps/Step3";
import { Step4 } from "./components/steps/Step4";
import { Dashboard } from "./pages/Dashboard";
import { RTMAgent } from "./pages/RTMAgent";
import { BDDAgent } from "./pages/BDDAgent";
import { FUTAgent } from "./pages/FUTAgent";
import { SelectionAgent } from "./pages/SelectionAgent";
import { HelpSupport } from "./pages/HelpSupport";
import { Settings } from "./pages/Settings";

type SelectionMap = Record<string, string[]>;

export default function App() {
  const [step, setStep] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [uf, setUf] = useState("");
  const [ut, setUt] = useState("");
  const [selections, setSelections] = useState<SelectionMap>({});
  const [others, setOthers] = useState<Record<string, string>>({});

  const toggle = (field: string, val: string) =>
    setSelections((prev) => {
      const curr = prev[field] || [];
      return {
        ...prev,
        [field]: curr.includes(val)
          ? curr.filter((v) => v !== val)
          : [...curr, val],
      };
    });

  const handleReset = () => {
    setStep(0);
    setCompanyName("");
    setStartDate("");
    setUf("");
    setUt("");
    setSelections({});
    setOthers({});
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COLORS.background}; }
        input:focus { outline: 2px solid ${COLORS.primary} !important; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f0f0f4; }
        ::-webkit-scrollbar-thumb { background: #c0c0cc; border-radius: 3px; }
      `}</style>

      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          fontFamily: FONTS.primary,
          background: COLORS.background,
        }}
      >
        <Sidebar onMenuClick={setCurrentScreen} />

        <div
          style={{ marginLeft: "80px", flex: 1, padding: "36px 40px 60px" }}
        >
          <Header 
            currentStep={currentScreen && currentScreen !== "Selection Agent" ? -1 : step} 
            onStepClick={(newStep) => {
              setCurrentScreen(null);
              setStep(newStep);
            }} 
          />

          {currentScreen === "Dashboard" && <Dashboard />}
          {currentScreen === "RTM Agent" && <RTMAgent />}
          {currentScreen === "BDD Agent" && <BDDAgent />}
          {currentScreen === "FUT Agent" && <FUTAgent />}
          {currentScreen === "Selection Agent" && (
            <SelectionAgent
              selections={selections}
              toggle={toggle}
              others={others}
              setOthers={setOthers}
              companyName={companyName}
              setCompanyName={setCompanyName}
              startDate={startDate}
              setStartDate={setStartDate}
              uf={uf}
              setUf={setUf}
              ut={ut}
              setUt={setUt}
              onReset={handleReset}
              onNext={() => setCurrentScreen(null)}
            />
          )}
          {currentScreen === "Help & Support" && <HelpSupport />}
          {currentScreen === "Settings" && <Settings />}

          {!currentScreen && step === 0 && (
            <Step1
              selections={selections}
              toggle={toggle}
              others={others}
              setOthers={setOthers}
              companyName={companyName}
              setCompanyName={setCompanyName}
              startDate={startDate}
              setStartDate={setStartDate}
              uf={uf}
              setUf={setUf}
              ut={ut}
              setUt={setUt}
              onReset={handleReset}
              onNext={() => setStep(1)}
            />
          )}
          {!currentScreen && step === 1 && (
            <Step2
              onReset={handleReset}
              onNext={() => setStep(2)}
              onBack={() => setStep(0)}
            />
          )}
          {!currentScreen && step === 2 && (
            <Step3
              onReset={handleReset}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {!currentScreen && step === 3 && (
            <Step4
              onReset={handleReset}
              onBack={() => setStep(2)}
              companyName={companyName}
              startDate={startDate}
              userBase={{ from: uf, to: ut }}
              selections={selections}
              others={others}
            />
          )}
        </div>
      </div>
    </>
  );
}
