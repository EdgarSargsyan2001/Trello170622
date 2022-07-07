import React, { useCallback, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import ButtonDiv from 'src/components/ButtonDiv';
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
  console.log('index up');
  const [infoModal, setInfoModal] = useState<ModalObj>(infoModalObj);
  const sectionData = useSelector((state: State) => state.sections);

  const [{ canDrop,isOver }, RefDrop] = useDrop(() => ({
    accept:'task',
    drop: (item: { id: number; nowPlaceSec: string }) => {
      // if (item.nowPlaceSec === sec.id) return;
  
      dispatch(
        dragDrop({
          taskId: item.id,
          // secId: sec.id,
          nowPlaceSec: item.nowPlaceSec,
        }),
      );
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    }),
  }));


  //====function ===================================


  const openModalFC = useCallback((type: string): void => {
    setInfoModal({
      ...infoModalObj,
      openModal: true,
      modalType: type,
    });
  }, []);

  const closeModalFC = useCallback(() => {
    setInfoModal({ ...infoModalObj, openModal: false });
  }, []);

  return (
    <div className="AppIndex">
      <div className="container" >
        {sectionData?.map((sec): JSX.Element => {
          return (
            <Section
              key={sec.id}
              sec={sec}
              setInfoModal={setInfoModal}
            />
          );
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

      <ButtonDiv showButtonTask={!!sectionData[0]} openModalFC={openModalFC} />
    </div>
  );
}

export default Index;
