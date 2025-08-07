"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    redirect( "/");
  }, []);
  return <div>Redirecting to the resume...</div>;
}
