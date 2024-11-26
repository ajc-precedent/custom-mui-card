import { Card } from "../mod.jsx";

const Example = () => {
  const handleClick = () => alert('Clicked!');

  return (
    <Card
      title="Example Card"
      description="This is a basic example of the card component"
      onAction={handleClick}
    />
  );
};

export { Example };