import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NotesClient from "./NotesClient";
import css from "./page.module.css"
import { fetchNotes } from "@/lib/api";

export default async function NotesPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['notes',1,''], queryFn: async () => { return fetchNotes(1, '')} });
   return (
    <main className={css.main}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient/>
      </HydrationBoundary>
    </main>
  );
}