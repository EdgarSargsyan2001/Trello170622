import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'src/components/Modal/Modal';
import Section from 'src/components/sections/Section';
import { State } from 'src/types';

// import Modal from './components/Modal/Modal';
// import Section from './components/sections/Section';

function Index() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('section');
  const sectionData = useSelector((state: State) => state.sections);

  //====function ===================================

  const openModalFC = (type: string): void => {
    setModalType(type);
    setOpenModal(true);
  };

  return (
    <div className="AppIndex">
      <div className="container">
        {sectionData?.map((sec): JSX.Element => {
          return <Section key={sec.id} sec={sec} />;
        })}
      </div>
      {openModal && (
        <div className="ModalBack">
          <Modal setOpenModal={setOpenModal} modalType={modalType} />
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
