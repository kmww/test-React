import styled from "@emotion/styled";
import { useMemo } from "react";
import { useFlux } from "./FluxProvider";

const StyledCol = styled.div`
  max-width: 100%;
  box-sizing: border-box;

  width: ${({ span }) => span && `${(span / 12) * 100}%`};
  margin-left: ${({ offset }) => offset && `${(offset / 12) * 100}%`};
`;

const Col = ({ children, span, offset, ...props }) => {
  const { gutter } = useFlux();
  const gutterStlye = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0];
      const veritcalGutter = gutter[1];
      return {
        paddingTop: `${veritcalGutter / 2}px`,
        paddingBottom: `${veritcalGutter / 2}px`,
        paddingleft: `${horizontalGutter / 2}px`,
        paddingRight: `${horizontalGutter / 2}px`,
      };
    } else {
      return {
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`,
      };
    }
  }, [gutter]);
  return (
    <StyledCol
      span={span}
      offset={offset}
      {...props}
      style={{ ...props.style, ...gutterStlye }}
    >
      {children}
    </StyledCol>
  );
};

export default Col;
