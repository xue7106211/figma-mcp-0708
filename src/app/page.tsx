import Image from "next/image";
import { PhoneVerificationDialog } from "../components/ui/phone-verification-dialog";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <PhoneVerificationDialog />
    </div>
  );
}
