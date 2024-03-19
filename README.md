# Real-time Feature Flags management with Growthbook

Integration with Growthbook is very simple. First refer to the [Growthbook docs](https://docs.growthbook.io/) and install React package:

```bash
npm install --save @growthbook/growthbook-react
```

## Configuration

Initiate Growthbook instance that will establish communication with the Growthbook API that returns your JSON config per environment.

```ts
const growthbook = new GrowthBook({
  apiHost: import.meta.env.VITE_GROWTHBOOK_API_HOST,
  clientKey: import.meta.env.VITE_GROWTHBOOK_CLIENT_KEY,
  enableDevMode: import.meta.env.DEV,
  subscribeToChanges: true,
})
```

## Usage

Simplest way is to use Growthbook hook to dictate feature behavior.

```ts
const featureEnabled = useFeatureIsOn("feature_key")
```

## Result: PROD & DEV

![image](https://github.com/lazarkulasevic/vite-feature-flags/assets/68285821/04934d6c-25b1-4517-915f-c283174cfae3)
