export type ActiveModal = "about" | "projects" | null;

export type AboutProps = {
  isOpen: boolean;
  onClose: () => void;
};
