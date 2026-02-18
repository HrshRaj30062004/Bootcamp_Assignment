"use client";

import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: black;

  th {
    background-color: #2563eb;
    color: white;
    padding: 10px;
    text-align: left;
  } 



  td {
    padding: 8px;
    border: 1px solid #100e0e;
  }

  tr:hover {
    background-color: #8b8e90;
    cursor: pointer;
  }
`;