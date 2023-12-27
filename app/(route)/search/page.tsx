"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";

export default function Search() {
  return (
    <SearchWrapper>
      <SearchBar placeholder="어떤 책을 찾고 있나요?" />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 172px;
`;

const SearchBar = styled.input.attrs((props) => ({
  type: "text",
  placeholder: props.placeholder,
}))`
  width: 700px;
  height: 80px;
  padding-left: 23px;

  color: #fbff48;
  font-size: 32px;

  border: 5px solid #fbff48;
  background-color: rgba(217, 217, 217, 0);

  &&::placeholder {
    padding-left: 23px;
    color: #fbff48;
    font-size: 32px;
  }
`;
