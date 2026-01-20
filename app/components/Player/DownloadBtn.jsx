 "use client"
 import Link from 'next/link';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { HiOutlineDownload } from "react-icons/hi";

function DownloadBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-light" className='rounded-pill' onClick={handleShow}>
        <HiOutlineDownload />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='btn btn-secondary btn-sm'>
          <Modal.Title>Avis Important!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Veuillez vous connecter pour poursuivre cette opération</Modal.Body>
        <Modal.Footer>
          <Link href={"/identification"} className='btn btn-warning rounded-pill'>
            Se connecter
          </Link>
          <Link href={"/inscription"} className='btn btn-outline-success rounded-pill'>
            Créer un compte
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DownloadBtn;