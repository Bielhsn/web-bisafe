import React, { useState } from "react";
import axios from "axios";

function Vistoria_IA() {
  const [responses, setResponses] = useState({ frontal: "", traseira: "", lateral: "" });
  const [files, setFiles] = useState({ frontal: null, traseira: null, lateral: null });

  const handleImageUpload = (e, imageType) => {
    setFiles({ ...files, [imageType]: e.target.files[0] });
  };

  const handleSendImage = () => {
    const formData = new FormData();
    for (const imageType in files) {
      if (files[imageType]) {
        formData.append(imageType, files[imageType]);
      } else {
        setResponses((prevResponses) => ({
          ...prevResponses,
          [imageType]: "Nenhuma imagem selecionada.",
        }));
      }
    }

    axios
      .post("http://127.0.0.1:5000/prever", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        const { frontal, traseira, lateral } = res.data;

        setResponses({ frontal, traseira, lateral });

        // Determine se a resposta é "É uma bicicleta!" ou "Não é uma bicicleta!" para cada imagem
        const isBikeFrontal = frontal === "frontal reconhecida com sucesso";
        const isBikeTraseira = traseira === "traseira reconhecida com sucesso";
        const isBikeLateral = lateral === "lateral reconhecida com sucesso";

        // Atualize as classes de box-shadow para cada imagem com base na resposta
        const frontalBox = document.querySelector('.frontal-image');
        const traseiraBox = document.querySelector('.traseira-image');
        const lateralBox = document.querySelector('.lateral-image');

        frontalBox.style.boxShadow = isBikeFrontal ? "0px 48px 35px -48px #15c800" : "0px 48px 35px -48px red";
        traseiraBox.style.boxShadow = isBikeTraseira ? "0px 48px 35px -48px #15c800" : "0px 48px 35px -48px red";
        lateralBox.style.boxShadow = isBikeLateral ? "0px 48px 35px -48px #15c800" : "0px 48px 35px -48px red";
      })
      .catch((error) => {
        console.error(error);
        setResponses({
          frontal: "Erro ao processar a imagem.",
          traseira: "Erro ao processar a imagem.",
          lateral: "Erro ao processar a imagem.",
        });
      });
  };

  return (
    <>
      <h1 className="survey">Vistoria</h1>
      <hr className="survey_line" color="#38B6FF"></hr>

      <div>
        <h1 id="titles_vistoria">Frontal</h1>
        <label htmlFor="frontal" className="custum-file-upload frontal-image">
          <div className="icon">
          <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
             <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
             <g
               id="SVGRepo_tracerCarrier"
               stroke-linecap="round"
               stroke-linejoin="round"
             ></g>
             <g id="SVGRepo_iconCarrier">
               <path
                 fill-rule="evenodd"
                 clip-rule="evenodd"
                 d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 
             7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 
             7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 
             4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 
             4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 
             22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 
             11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 
             23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                 fill=""
               ></path>{" "}
             </g>
           </svg>
          </div>
          <div className="text">
            <span>Click to upload image</span>
          </div>
          <p className="resposta"> {responses.frontal}</p>
          <input id="frontal" type="file" onChange={(e) => handleImageUpload(e, "frontal")} />
        </label>
      </div>

      <div className="traseira">
        <h1 id="titles_vistoria">Traseira</h1>
        <label htmlFor="traseira" className="custum-file-upload traseira-image">
          <div className="icon">
          <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
             <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
             <g
               id="SVGRepo_tracerCarrier"
               stroke-linecap="round"
               stroke-linejoin="round"
             ></g>
             <g id="SVGRepo_iconCarrier">
               <path
                 fill-rule="evenodd"
                 clip-rule="evenodd"
                 d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 
             7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 
             7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 
             4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 
             4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 
             22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 
             11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 
             23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                 fill=""
               ></path>{" "}
             </g>
           </svg>
          </div>
          <div className="text">
            <span>Click to upload image</span>
          </div>
          <p className="resposta"> {responses.traseira}</p>
          <input id="traseira" type="file" onChange={(e) => handleImageUpload(e, "traseira")} />
        </label>
      </div>

      <div className="laterais">
        <h1 id="titles_vistoria">Lateral</h1>
        <label htmlFor="lateral" className="custum-file-upload lateral-image">
          <div className="icon">
          <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
             <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
             <g
               id="SVGRepo_tracerCarrier"
               stroke-linecap="round"
               stroke-linejoin="round"
             ></g>
             <g id="SVGRepo_iconCarrier">
               <path
                 fill-rule="evenodd"
                 clip-rule="evenodd"
                 d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 
             7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 
             7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 
             4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 
             4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 
             22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 
             11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 
             23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                 fill=""
               ></path>{" "}
             </g>
           </svg>
          </div>
          <div className="text">
            <span>Click to upload image</span>
          </div>
          <p className="resposta"> {responses.lateral}</p>
          <input id="lateral" type="file" onChange={(e) => handleImageUpload(e, "lateral")} />
        </label>
      </div>

      <button className="bn_send_ar" onClick={handleSendImage}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
          <svg
               height="24"
               width="24"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path d="M0 0h24v24H0z" fill="none"></path>
               <path
                 d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                 fill="currentColor"
               ></path>
             </svg>
          </div>
        </div>
        <span>Send</span>
      </button>
    </>
  );
}

export default Vistoria_IA;
