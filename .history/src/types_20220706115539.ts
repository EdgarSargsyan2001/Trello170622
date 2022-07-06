export interface SecObj {
  title: string;
  desc: string;
  tasks: Array<TaskObj>;
  id: string;
  color1: string;
  color2: string;
}
export interface TaskObj {
  title: string;
  desc: string;
  id: string;
  color1: string;
  color2: string;
}
export interface State {
  sections: Array<SecObj>;
}

export interface ModalObj {
  openModal: boolean;
  modalType: string;
  defTitle: string;
  defDesc: string;
  defColor1: string;
  defColor2: string;
  idSec?: string
  idTask?: string
  nowPlaceSec?st
}

export interface ModalProps {
  setInfoModal: (obj: ModalObj | Function) => void;
  infoModal: ModalObj;
  sectionData:Array<SecObj>
}
