import { twMerge } from "tailwind-merge";

type ButtonProps = {
  classes?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  classes = "",
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `text-white bg-btn-background hover:bg-btn-background-hover font-medium py-2 px-4 rounded ${classes}`
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
