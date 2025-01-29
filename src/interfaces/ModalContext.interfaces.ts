export interface ModalContextType {
  currentModal: string;
  showModal: boolean;
  initTaskID: string;
  openModal: (modalName: string, taskID?: string) => void;
  closeModal: () => void;
}
