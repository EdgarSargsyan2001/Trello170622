import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'src/components/Modal/Modal';
import Section from 'src/components/sections/Section';
import { ModalObj, State } from 'src/types';

function Index() {
  const [infoModal, setInfoModal] = useState({
    openModal: false,
    modalType: 'section',
  });
  const sectionData = useSelector((state: State) => state.sections);

  //====function ===================================

  const openModalFC = (type: string): void => {
    // setModalType(type);
    // setOpenModal(true);
  };

  return (
    <div className="AppIndex">
      <div className="container">
        {sectionData?.map((sec): JSX.Element => {
          return <Section key={sec.id} sec={sec} />;
        })}
      </div>
      {infoModal && (
        <div className="ModalBack">
          <Modal setInfoModal={setInfoModal} />
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
