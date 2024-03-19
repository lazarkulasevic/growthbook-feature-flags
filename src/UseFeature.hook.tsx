import { useFeatureIsOn } from "@growthbook/growthbook-react"

const useFeature = (feature: string) => {
  const enabled = useFeatureIsOn(feature)
  return { enabled }
}

export default useFeature
