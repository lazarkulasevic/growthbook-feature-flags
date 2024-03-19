import { useFeature } from "@growthbook/growthbook-react"
import type { FC, ReactNode } from "react"

type FeatureProps = {
  flag: string
  children: ReactNode | ReactNode[]
}

const Feature: FC<FeatureProps> = ({ flag, children }) => {
  const { on } = useFeature(flag)
  return on ? <>{children}</> : null
}

export default Feature
