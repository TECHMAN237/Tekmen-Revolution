import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/marketing-digital")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/services/marketing-digital"!</div>;
}
