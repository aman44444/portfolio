export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  projectLink: string;
};

export type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
