import React, { useState } from "react";
import styled from "styled-components";
import { ActionButton } from "../../components/button/Button";
import ContainerFull from "../../components/container/ContainerFull";
import ContainerMd from "../../components/container/ContainerMd";

import { IoCheckmarkCircleSharp, IoCloseCircle } from "react-icons/io5";

import Input from "../../components/input/Input";

const CSSCreateProvince = styled.div`
  min-height: 60vh;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h2 {
    font-size: 25px;
    font-weight: bold;
  }
`;

const CSSFormCreateProvince = styled.form`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const CSSFormArea = styled.div`
  color: white;
  width: 60%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  flex-grow: 1;
`;

const CreateStatus = styled.div`
  color: ${(props) => (props.notcreate ? "white" : "#0b846e")};
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color: ${(props) => (props.notcreate ? "red" : "white")};
  border: ${(props) => (props.notcreate ? "transparent" : "2px solid #0b846e")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  animation: render 0.5s;
  svg {
    font-size: 2rem;
  }

  @keyframes render {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const CreateProvincePage = () => {
  const [create, setCreate] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    initials: "",
    img_cover: "",
  });

  const changeInput = (e) => {
    setInputs({
      ...inputs,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = {
      name: e.target.name.value,
      initials: e.target.initials.value,
      img_cover: e.target.img_cover.value,
    };
    body = JSON.stringify(body);
    try {
      fetch("http://localhost:3001/province/create", { method: "POST", mode: "cors", body: body, headers: { "Content-type": "application/json; charset=UTF-8" } }).then((send) => {
        if (send.status == 201) {
          setCreate(true);
        } else {
          setCreate(false);
        }
      });
    } catch (error) {
      setCreate(false);
    }
  };

  return (
    <ContainerFull>
      <ContainerMd justify="center" padding="5rem 0rem">
        <CSSCreateProvince>
          <h2>Create Province</h2>
          <CSSFormCreateProvince onSubmit={handleSubmit} method="POST" action="http://localhost:3001/province/create">
            <CSSFormArea>
              <Input id="province-name" name="name" change={changeInput} value={inputs.name} width="100%" placeholder="Name" />
            </CSSFormArea>
            <CSSFormArea>
              <Input id="province-initials" name="initials" change={changeInput} value={inputs.initials} width="100%" placeholder="Initials" />
            </CSSFormArea>
            <CSSFormArea>
              <Input id="province-img-cover" name="img_cover" change={changeInput} value={inputs.img_cover} width="100%" placeholder="Img Cover Link" />
            </CSSFormArea>
            <CSSFormArea justify="space-between">
              <ActionButton type="button" invert>
                Clear Inputs
              </ActionButton>
              <ActionButton type="submit">Create Province</ActionButton>
            </CSSFormArea>
            <CSSFormArea>
              {create == true ? (
                <CreateStatus>
                  <IoCheckmarkCircleSharp />
                  <p>Province created successfully!</p>
                </CreateStatus>
              ) : create == false ? (
                <CreateStatus notcreate>
                  <IoCloseCircle />
                  <p>Province not created!</p>
                </CreateStatus>
              ) : (
                ""
              )}
            </CSSFormArea>
          </CSSFormCreateProvince>
        </CSSCreateProvince>
      </ContainerMd>
    </ContainerFull>
  );
};

export default CreateProvincePage;
