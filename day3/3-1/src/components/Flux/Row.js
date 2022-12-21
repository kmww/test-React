import styled from "@emotion/styled";
import { useMemo } from "react";
import FluxProvider from "./FluxProvider";

const AlignToCSSValue = {
  top: "flex-start",
  middle: "center",
  bottom: "flex-end",
};

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;

  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => AlignToCSSValue[align]};
`;

const Row = ({ children, justify, align, gutter, ...props }) => {
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0];
      const veritcalGutter = gutter[1];
      return {
        marginTop: `-${veritcalGutter / 2}px`,
        marginBottom: `-${veritcalGutter / 2}px`,
        marginleft: `-${horizontalGutter / 2}px`,
        marginRight: `-${horizontalGutter / 2}px`,
      };
    } else {
      return {
        marginLeft: `-${gutter / 2}px`,
        marginRight: `-${gutter / 2}px`,
      };
    }
  }, [gutter]);

  return (
    <FluxProvider gutter={gutter}>
      <StyledRow
        justify={justify}
        align={align}
        {...props}
        style={{ ...props.style, ...gutterStyle }}
      >
        {children}
      </StyledRow>
    </FluxProvider>
  );
};

export default Row;
