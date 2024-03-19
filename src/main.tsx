import React from "react"
import ReactDOM from "react-dom/client"
import GrowthbookProvider from "./GrowthbookProvider.tsx"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GrowthbookProvider>
      <App />
    </GrowthbookProvider>
  </React.StrictMode>
)
