export interface SecObj {
  title: string;
  desc: string;
  tasks: Array<TaskObj>;
  id: number;
  color1: string;
  color2: string;
}
export interface TaskObj {
  title: string;
  desc: string;
  id: number;
  color1: string;
  color2: string;
}
export interface State {
  sections: Array<SecObj>;
  inputs: { title: string; desc: string; color1: string; color2: string };
  uniqueId: number;
}

export interface ModalObj {
  openModal: boolean;
  modalType: string;
}

export interface ModalProps {
  setInfoModal: (obj: ModalObj | Function) => void;
  infoModal: ModalObj;
}