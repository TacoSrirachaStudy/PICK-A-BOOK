"use client";
import Image from "next/image";
import styled from "styled-components";
import BookImage from "../../_assets/images/dummy_book.png";
import { useSearchParams } from "next/navigation";

export default function Detail() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const contents = searchParams.get("contents");
  const datetime = searchParams.get("datetime");
  const isbn = searchParams.get("isbn");
  const authors = searchParams.get("authors");
  const publisher = searchParams.get("publisher");
  const translators = searchParams.get("translators");
  const price = searchParams.get("price");
  const sale_price = searchParams.get("sale_price");
  const url = searchParams.get("url") as string;
  const thumbnail = searchParams.get("thumbnail") as string;

  return (
    <>
      <BackGround></BackGround>
      <Wrapper>
        <Inner>
          <Thumbnail>
            {thumbnail && <Image src={thumbnail} alt="썸네일" width="300" height="400" />}
          </Thumbnail>
          <DetailWrapper>
            <Title>{title}</Title>
            <BookDetail>
              <p>소개 : {contents}</p>
              <p>도서번호 : {isbn}</p>
              <p>출판일 : {datetime}</p>
              <p>작가 : {authors}</p>
              <p>번역가 : {translators}</p>
              <p>출판사 : {publisher}</p>
              <p>정가 : {price} 원</p>
              <p>판매가 : {sale_price} 원</p>
              <a href={url}>상세 페이지 바로가기</a>
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
  height: 400px;
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
  & p {
    line-height: 24px;
  }
`;
