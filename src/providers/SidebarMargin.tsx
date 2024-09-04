"use client";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Sidebar } from "@/components/templates/dashboard/aside-menu/sidebar";

const ContentWrapper = styled.div<{ isOpen: boolean }>`
  min-height: calc(100vh - 56px);
  background-color: ${(props) => (props.theme.mode === 'dark' ? '#18181b' : '#fafafa')};
  transition: margin-left 0.3s ease-in-out;
  margin-left: ${(props) => (props.isOpen ? '18rem' : '5.625rem')}; /* 72px for lg:ml-72, 90px for lg:ml-[90px] */
`;

export function SideBarProviders({ children }: any) {
  const { isOpen } = useSelector((state: any) => state.sidebar);
  console.log("🚀 ~ SideBarProviders ~ isOpen:", isOpen);
  return (
    <>
      <Sidebar />
      <ContentWrapper isOpen={isOpen}>
        {children}
      </ContentWrapper>
    </>
  );
}
