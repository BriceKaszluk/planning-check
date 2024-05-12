import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Page Introuvable
      </h2>
      <p className="text-gray-600 mb-4">
        La ressource demandée n'a pas été trouvée.
      </p>
      <Link href="/">
        <Button> Retourner à l'accueil</Button>
      </Link>
    </div>
  );
}
