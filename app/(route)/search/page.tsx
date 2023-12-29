"use client";
import Image from "next/image";
import styled from "styled-components";
import BookImage1 from "../../_assets/images/dummy_book_1.png";
import BookImage2 from "../../_assets/images/dummy_book_2.png";
import BookImage3 from "../../_assets/images/dummy_book_3.png";
import BookImage4 from "../../_assets/images/dummy_book_4.png";
import BookImage5 from "../../_assets/images/dummy_book_5.png";
import SearchIcon from "../../_assets/icons/Search.svg";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchBooks = async (query: string) => {
  try {
    const response = await fetch(
      `https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(
        query
      )}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("서버에서 책을 가져오는 중 오류가 발생했습니다.");
    }
    const jsonData = await response.json(); // JSON 데이터를 파싱
    console.log(jsonData);
    return jsonData;
  } catch (error) {
    throw new Error("책을 가져오는 중 오류가 발생했습니다.");
  }
};

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const {
    data: bookData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["books", searchQuery], () => fetchBooks(searchQuery), {
    enabled: false,
  });

  const handleBookSearchResult = () => {
    if (searchQuery.trim()) {
      refetch();
    }
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBar
          placeholder="어떤 책을 찾고 있나요?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIconWrapper onClick={handleBookSearchResult}>
          <Image src={SearchIcon} alt="검색아이콘" />
        </SearchIconWrapper>
      </SearchWrapper>
      <ResultWrapper>
        <Image src={BookImage1} alt="책이미지1" />
        <Image src={BookImage2} alt="책이미지2" />
        <Image src={BookImage3} alt="책이미지3" />
        <Image src={BookImage4} alt="책이미지4" />
        <Image src={BookImage5} alt="책이미지5" />
      </ResultWrapper>
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 172px;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 700px;
  height: 80px;
  margin-bottom: 141px;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer; // 클릭 가능한 요소로 변경
`;

const SearchBar = styled.input.attrs((props) => ({
  type: "text",
  placeholder: props.placeholder,
}))`
  width: 700px;
  height: 80px;
  padding-left: 23px;
  position: relative;

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
