import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: ${({ block }) => (block ? "block" : "inline-block")};
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? "red" : "gray")};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Input = ({
  label,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  readonly = false,
  wrpperProps,
  ...props
}) => {
  return (
    <Wrapper block={block} {...wrpperProps}>
      <Label>{label}</Label>
      <StyledInput
        invalid={invalid}
        readOnly={readonly}
        required={required}
        disabled={disabled}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;
