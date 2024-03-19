import { useEffect } from "react"
import type { PropsWithChildren, FC } from "react"
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react"

const growthbook = new GrowthBook({
  apiHost: import.meta.env.VITE_GROWTHBOOK_API_HOST,
  clientKey: import.meta.env.VITE_GROWTHBOOK_CLIENT_KEY,
  enableDevMode: import.meta.env.DEV,
  subscribeToChanges: true,
})

const GrowthbookProvider: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.loadFeatures()

    return () => {
      growthbook.destroy()
    }
  }, [])

  return (
    <GrowthBookProvider growthbook={growthbook}>{children}</GrowthBookProvider>
  )
}

export default GrowthbookProvider
