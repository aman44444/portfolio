export type ActiveModal = "about" | "projects" | null;

export type AboutProps = {
  isVisible: boolean;
  onClose: () => void;
};
