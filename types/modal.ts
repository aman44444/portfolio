export type ActiveModal = "about" | "projects" | null;

export type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
};
