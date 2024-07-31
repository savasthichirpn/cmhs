import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';

export default function HumanResourcePolicyManual({ isOpen, onClose, PdfFile }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="full">
            <ModalOverlay />
            <ModalContent w={'full'} minW={'800px'} maxW={'90vw'} overflow={'auto'} minH={'600px'}>
                <ModalHeader>Human Resource Policy Manual</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <iframe
                        src={PdfFile}
                        width="100%"
                        height="600px"
                        title="PDF Viewer"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
