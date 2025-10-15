import { Hero } from "../Hero";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../lib/queryClient";

export default function HeroExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <Hero />
    </QueryClientProvider>
  );
}
