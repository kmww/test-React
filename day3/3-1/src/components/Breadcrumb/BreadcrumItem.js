import Text from "../Text/Text";
import styled from "@emotion/styled";
import Icon from "../Icon";
import PropTypes from "prop-types";

const BreadcrumbItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const BreadcrumbItem = ({ children, href, active, __TYPE, ...props }) => {
  return (
    <BreadcrumbItemContainer {...props}>
      <Anchor href={href}>
        <Text size={14} strong={active}>
          {children}
        </Text>
      </Anchor>
      {!active && <Icon name="chevron-right" size={22} strokeWidth={1} />}
    </BreadcrumbItemContainer>
  );
};

BreadcrumbItem.defaultProps = {
  __TYPE: "BreadcrumbItem",
};

BreadcrumbItem.propTypes = {
  __TYPE: PropTypes.oneOf(["BreadcrumbItem"]),
};

export default BreadcrumbItem;
