"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import BookImage from "../../../_assets/images/dummy_book.png";

export default function Detail() {
  return (
    <>
      <BackGround></BackGround>
      <Wrapper>
        <Inner>
          <Thumbnail>
            <Image src={BookImage} alt="썸네일" width="300" />
          </Thumbnail>
          <DetailWrapper>
            <Title>아주 작은 인간들이 말할 때</Title>
            <BookDetail>
              <p>도서 소개</p>
              <p>도서 상세</p>
              <p>국제 표준 도서번호</p>
              <p>도서 출판날짜</p>
              <p>도서 저자 리스트</p>
              <p>도서 출판사</p>
              <p>도서 번역자 리스트</p>
              <p>도서 정가</p>
              <p>도서 판매가</p>
            </BookDetail>
          </DetailWrapper>
        </Inner>
      </Wrapper>
    </>
  );
}
const BackGround = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: black;
  opacity: 30%;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

const Thumbnail = styled.div`
  box-shadow: 7.918px 7.918px 19.796px 0px rgba(0, 0, 0, 0.25);
`;

const Inner = styled.div`
  display: flex;
  gap: 60px;
`;

const DetailWrapper = styled.div`
  & p {
    font-size: 20px;
    color: #ffffff;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;

  color: #fbff48;
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 600;
`;

const BookDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
