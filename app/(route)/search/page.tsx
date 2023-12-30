"use client";
import Image from "next/image";
import styled from "styled-components";
import SearchIcon from "../../_assets/icons/Search.svg";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";

const fetchBooks = async (query: string) => {
  try {
    const response = await fetch(
      `https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(query)}`,
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
  const router = useRouter();
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
  const handleShowDetailPage: any = (book: any) => {
    console.log(book);
    router.push(
      `/detail?title=${encodeURIComponent(book.title)}&authors=${encodeURIComponent(
        book.authors
      )}&contents=${encodeURIComponent(book.contents)}&datetime=${encodeURIComponent(
        book.datetime
      )}&isbn=${encodeURIComponent(book.isbn)}&price=${encodeURIComponent(
        book.price
      )}&publisher=${encodeURIComponent(book.publisher)}&sale_price=${encodeURIComponent(
        book.sale_price
      )}&translators=${encodeURIComponent(book.translators)}&url=${encodeURIComponent(
        book.url
      )}&thumbnail=${encodeURIComponent(book.thumbnail)}
    }`
    );
  };
  return (
    <Wrapper>
      <BackGround></BackGround>
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
        {bookData && (
          <>
            {bookData.documents.map((book: any, index: number) => (
              <Image
                onClick={() => handleShowDetailPage(book)}
                key={index}
                src={book.thumbnail}
                alt={`책 이미지 ${index + 1}`}
                width={196}
                height={280}
              />
            ))}
          </>
        )}
      </ResultWrapper>
    </Wrapper>
  );
};

export default Search;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 172px;
`;

const SearchWrapper = styled.div`
  position: relative;
  z-index: 2;
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

  outline: none;

  &&::placeholder {
    padding-left: 23px;
    color: #fbff48;
    font-size: 32px;
  }
`;

const ResultWrapper = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 24px;

  overflow-x: auto;
  width: 1080px;
  margin: 0 auto;
`;
