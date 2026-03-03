import { Suspense } from "react";
import Verification from "./VerifyToken";

export default function Page() {
  return (
    <Suspense fallback={<div>Yuklanmoqda...</div>}>
      <Verification />
    </Suspense>
  );
}
