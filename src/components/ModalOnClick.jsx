import { useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from "@chakra-ui/react";
import { eventDetails } from "../utils";
import { useEffect } from "react";

export function ModalOnClick(id, setSelectEvent) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const eventData = eventDetails.find(event => event.id === id);

    useEffect(() => {
      onOpen();
    }, [onOpen]);

    if(!eventData){
      return null;
    };

    return (
      <div className="">
            <Modal isOpen={isOpen} onClose={() => {
              onClose();
              setSelectEvent(null);
            }} size={'xl'} isCentered motionPreset='slideInBottom'>
              <ModalOverlay backdropBlur='2px' />
              <ModalContent>
                <ModalHeader>
                  <button type="button" className="bg-black uppercase font-Code text-white px-4 py-1 rounded-2xl">
                    Hackathon
                  </button>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <div className="w-full">
                    <div className="w-full flex justify-center font-Code">Hackathon details</div>
                    <div className="w-full">
                      <p className="w-full">{`{`}</p>
                      <div className="w-full flex flex-row">
                        <div className="w-[25%]"><p className="w-full pl-4">{`name:`}</p></div>
                        <div className="w-[75%]"><p className="w-full"><span className="font-bold pl-2">TezuHacks</span>,</p></div>
                      </div>
                      <div className="w-full flex flex-row">
                        <div className="w-[25%]"><p className="w-full pl-4">{`description:`}</p></div>
                        <div className="w-[75%]"><p className="w-full pl-2"><span className="font-bold">Ready to innovate, create, and compete? Join us at [Hackathon Name] for an unforgettable 24 hours of coding, collaboration, and prizes!</span>,</p></div>
                      </div>
                      <div className="w-full flex flex-row">
                        <div className="w-[25%]"><p className="w-full pl-4">{`timeDuration:`}</p></div>
                        <div className="w-[75%]"><p className="w-full"><span className="font-bold pl-2">48 hours</span>,</p></div>
                      </div>
                      <div className="w-full flex flex-row">
                        <div className="w-[25%]"><p className="w-full pl-4">{`startDate:`}</p></div>
                        <div className="w-[75%]"><p className="w-full"><span className="font-bold pl-2">1 Nov 12:00 AM</span>,</p></div>
                      </div>
                      <div className="w-full flex flex-row">
                        <div className="w-[25%]"><p className="w-full pl-4">{`endDate:`}</p></div>
                        <div className="w-[75%]"><p className="w-full"><span className="font-bold pl-2">3 Nov 12:00 AM</span>,</p></div>
                      </div>
                      <div className="w-full flex flex-row">
                        <div className="w-[25%]"><p className="w-full pl-4">{`category:`}</p></div>
                        <div className="w-[75%]"><p className="w-full"><span className="font-bold pl-2">Software</span>,</p></div>
                      </div>
                      <div className="w-full flex flex-row">
                        <div className="w-[25%]"><p className="w-full pl-4">{`probStatement:`}</p></div>
                        <div className="w-[75%]"><p className="w-full pl-2"><span className="font-bold">Develop a cross-platform application supporting E2EE texting, voice and video calls in android, iOS and desktops</span>,</p></div>
                      </div>
                      <div className="w-full flex flex-row">
                        <div className="w-[25%]"><p className="w-full pl-4">{`teamSize:`}</p></div>
                        <div className="w-[75%]"><p className="w-full"><span className="font-bold pl-2">2-4 members</span>,</p></div>
                      </div>
                      <div className="w-full flex flex-row">
                        <div className="w-[25%]"><p className="w-full pl-4">{`hackType:`}</p></div>
                        <div className="w-[75%]"><p className="w-full"><span className="font-bold pl-2">Offline</span>,</p></div>
                      </div>
                      <div className="w-full flex flex-row">
                        <div className="w-[25%]"><p className="w-full pl-4">{`hackLocation:`}</p></div>
                        <div className="w-[75%]"><p className="w-full"><span className="font-bold pl-2">CSE Department</span>,</p></div>
                      </div>
                      <p className="w-full">{`}`}</p>
                    </div>
                  </div>
                </ModalBody>
  
                <ModalFooter>
                  <Button colorScheme="blue" className="shadow-2xl" mr={3}>
                    Participate
                  </Button>
                  <Button colorScheme="red" className="shadow-2xl" onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
    )
  }