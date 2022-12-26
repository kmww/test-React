import styled from "@emotion/styled";
import BreadcrumbItem from "./BreadcrumItem";
import React from "react";

const BreadcrumbContainer = styled.nav`
  display: flex;
`;

const Breadcrumb = ({ children, ...props }) => {
  const items = React.Children.toArray(children)
    .filter((element) => {
      if (
        React.isValidElement(element) &&
        element.props.__TYPE === "BreadcrumbItem"
      ) {
        return true;
      }

      console.warn("Only accepts Breadcrumb. Item as it's children.");
      return false;
    })
    .map((element, index, elements) => {
      return React.cloneElement(element, {
        ...element.props,
        active: index === elements.length - 1,
      });
    });

  return <BreadcrumbContainer {...props}>{items}</BreadcrumbContainer>;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
