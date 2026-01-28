export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  labelledBy: string;
  children: React.ReactNode;
}