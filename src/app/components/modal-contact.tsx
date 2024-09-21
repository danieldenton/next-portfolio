'use client'

import { useState } from "react";
import ContactForm from "./contact-form";
import Modal from "./modal";

export default function ModalContact(){
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
        <ContactForm />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}