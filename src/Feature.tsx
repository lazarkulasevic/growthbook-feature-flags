import useFeature from "./UseFeature.hook"
import type { PropsWithChildren, FC } from "react"

type FeatureProps = {
  flag: string
} & PropsWithChildren

const Feature: FC<FeatureProps> = ({ flag, children }: FeatureProps) => {
  const { enabled } = useFeature(flag)
  return enabled ? <>{children}</> : null
}

export default Feature
