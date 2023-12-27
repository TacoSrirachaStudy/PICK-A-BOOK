"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import BookImage1 from "../../_assets/images/dummy_book_1.png";
import BookImage2 from "../../_assets/images/dummy_book_2.png";
import BookImage3 from "../../_assets/images/dummy_book_3.png";
import BookImage4 from "../../_assets/images/dummy_book_4.png";
import BookImage5 from "../../_assets/images/dummy_book_5.png";

export default function Search() {
  return (
    <SearchWrapper>
      <SearchBar placeholder="어떤 책을 찾고 있나요?" />
      <ResultWrapper>
        <Image src={BookImage1} alt="책이미지1" />
        <Image src={BookImage2} alt="책이미지2" />
        <Image src={BookImage3} alt="책이미지3" />
        <Image src={BookImage4} alt="책이미지4" />
        <Image src={BookImage5} alt="책이미지5" />
      </ResultWrapper>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 141px;

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

const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
