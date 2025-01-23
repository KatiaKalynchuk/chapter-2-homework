import { Header } from "@/components/header/header";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect } from 'react';

export const Route = createLazyFileRoute("/tasks")({
    component: TasksPage,
});

function TasksPage() {
  useEffect(()=> {
    import("angularApp/AppComponent").then((module)=> {
    }).catch((e)=>{
      console.error(e);
    });
  })

  return <div className="container">
    <Header />
    <app-root></app-root>
  </div>
}
