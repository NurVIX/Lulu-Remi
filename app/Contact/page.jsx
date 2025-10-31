import { Suspense } from "react";
import ContactClient from "./ContactClient";

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading contact page...</div>}>
      <ContactClient />
    </Suspense>
  );
}