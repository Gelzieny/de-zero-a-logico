"use client"

import { useState } from "react";

import { CourseHeader } from "@/components/header";

export default function Home() { 
  
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <CourseHeader />
    </div>
  );
}
