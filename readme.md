// File: README.md
# @yourusername/component-name

A simple, reusable React card component.

## Installation

```bash
# Deno/JSR
import { Card } from "jsr:@yourusername/component-name";

# npm
npm install @jsr/yourusername__component-name
```

## Usage

```jsx
import { Card } from "@yourusername/component-name";

const App = () => {
  const handleClick = () => console.log('clicked');

  return (
    <Card
      title="My Card"
      description="Some description"
      onAction={handleClick}
      actionLabel="Click Me"
    />
  );
};

export default App;
```

## Props

- `title` (string, required): Card title
- `description` (string, optional): Card description
- `imageUrl` (string, optional): URL for card image
- `onAction` (function, optional): Click handler for action button
- `actionLabel` (string, optional, default: "Learn More"): Button text