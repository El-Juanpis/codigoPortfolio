import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import "./ContactForm.css";

const ContactForm = () => {
  const refForm = useRef();
  const [formFilled, setFormFilled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const serviceId = "service_fwt7fkk";
    const templateId = "template_xl7bmnf";
    const apiKey = "XCgPHugLkK8DAdo_J";

    if (formFilled) {
      emailjs
        .sendForm(serviceId, templateId, refForm.current, apiKey)
        .then((result) => {
          console.log(result.text);
          toast("Se ha enviado Correctamente", {
            description: "Gracias por enviar el correo",
            icon: "✅",
            duration: 2000
          });
          refForm.current.reset();
          setFormFilled(false);
        })
        .catch((error) => {
          console.error(error);
          toast("Ha ocurrido un error al enviar el correo", {
            description: "Por favor, inténtalo de nuevo más tarde",
            icon: "❌",
            duration: 2000
          });
        });
    } else {
      toast("Por favor, complete todos los campos del formulario", {
        description: "Asegúrese de llenar todos los campos",
        icon: "⚠️",
        duration: 2000
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (value.trim() !== "") {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  };

  return (
    <div className="contact-form-content">
      <form
        ref={refForm}
        onSubmit={handleSubmit}
        className="form-class"
        action=""
      >
        <input
          type="text"
          name="username"
          placeholder="Nombre"
        
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
         
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Mensaje"
          rows={3}
         
          onChange={handleInputChange}
        ></textarea>
        <button className="font-button">Enviar</button>
      </form>
      <Toaster />
    </div>
  );
};

export default ContactForm;