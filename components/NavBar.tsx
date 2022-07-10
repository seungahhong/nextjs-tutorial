import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.header`
  width: 100%;
  padding: 12px;
  position: sticky;
  top: 0;
`;

const GNB = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  height: 40px;
  margin: 0 auto;

  & > h1 {
    font-size: 1.5rem;
    font-weight: 700;

    a {
      text-decoration: none;
      color: #000;
    }
  }
`;

const Navbar: FunctionComponent = () => {
  return (
    <Container>
      <GNB>
        <h1>
          <Link href="/">
            <a>와디즈 기술블로그</a>
          </Link>
        </h1>
      </GNB>
    </Container>
  );
};

export default Navbar;
