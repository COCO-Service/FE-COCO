// 사용하지 않는 컴포넌트입니다.

import styled from "styled-components";

function AdminNum() {
  return (
    <AdminNumAll>
      <AdminNumTitle>교사번호</AdminNumTitle>
      <AdminNumInput
        type="text"
        placeholder="교사번호를 입력하세요"
      ></AdminNumInput>
    </AdminNumAll>
  );
}

const AdminNumTitle = styled.div`
  font-size: 16px;
`;

const AdminNumAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: centers;
  gap: 12px;
`;

const AdminNumInput = styled.input`
  width: 502.574px;
  padding: 22.57px 0px 26.52px 32.08px;
  border-radius: 6px;
  border: 0.6px solid #282828;
  outline: none;
`;

export default AdminNum;
