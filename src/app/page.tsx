"use client"


import { Content } from "@/components/content";
import { mockCourseLevels } from "@/components/niveis";

export default function Home() { 
  
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <main className="flex-1 p-6 flex flex-col md:flex-row overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row flex-1 overflow-hidden">
          <Content courseLevels={mockCourseLevels}/>
        </div>
      </main>
    </div>
  );
}
