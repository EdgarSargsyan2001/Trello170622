import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'src/components/Modal/Modal';
import Section from 'src/components/sections/Section';
import { ModalObj, State } from 'src/types';

const infoModalObj = {
  openModal: false,
  modalType: 'section',
  defTitle: '',
  defDesc: '',
  defColor1: '#eeee11',
  defColor2: '#03c8ab',
};

function Index() {
  console.Console.og
  const [infoModal, setInfoModal] = useState<ModalObj>(infoModalObj);
  const sectionData = useSelector((state: State) => state.sections);

  //====function ===================================

  const openModalFC = (type: string): void => {
    setInfoModal({
      ...infoModalObj,
      openModal: true,
      modalType: type,
    });
  };
  const closeModalFC = () => {
    setInfoModal({ ...infoModalObj, openModal: false });
  };
  
  return (
    <div className="AppIndex">
      <div className="container">
        {sectionData?.map((sec): JSX.Element => {
          return <Section key={sec.id} sec={sec} setInfoModal={setInfoModal} />;
        })}
      </div>
      {infoModal.openModal && (
        <div className="ModalBack" onClick={closeModalFC}>
          <Modal
            setInfoModal={setInfoModal}
            infoModal={infoModal}
            sectionData={sectionData}
          />
        </div>
      )}

      <div className="buttonDiv">
        
        {sectionData[0] && (
          <button
            className="AddTaskBtn"
            onClick={(): void => openModalFC('task')}
          >
            Task
          </button>
        )}
        <button
          className="AddSectionBtn"
          onClick={(): void => openModalFC('section')}
        >
          Section
        </button>
      </div>
    </div>
  );
}

export default Index;
