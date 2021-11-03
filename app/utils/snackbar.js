import React from 'react'
import styled from "styled-components";
import SnackbarBase from "@material-ui/core/Snackbar";
import SnackbarContentBase from "@material-ui/core/SnackbarContent";
import IconButtonBase from "@material-ui/core/IconButton";
import ErrorIconBase from "@material-ui/icons/Error";
import CheckCircleIconBase from "@material-ui/icons/CheckCircle";
import CloseIconBase from "@material-ui/icons/Close";

const Snackbar = styled(SnackbarBase)`
  /* >>> */
`;
const SnackbarContent = styled(SnackbarContentBase)`
  /* >>> */
  && {
    background: ${props =>
    props.status === "success" ? "#27ae60": props.status ==="error" ? "#c0392b":""};
    padding: 0 0.5rem;
  }
`;
const IconButton = styled(IconButtonBase)`
  /* >>> */
`;
const ErrorIcon = styled(ErrorIconBase)`
  /* >>> */
  margin: 0.6rem;
`;
const CheckCircleIcon = styled(CheckCircleIconBase)`
  /* >>> */
  margin: 0.6rem;
`;
const InfoWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const CloseIcon = styled(CloseIconBase)`
  padding: 2px;
`;

export default function Toast(props) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={props.open}
      autoHideDuration={6000}
      onClose={props.handleClose}
    >
      <SnackbarContent
        status={props.status}
        contentprops={{
          "aria-describedby": "message-id"
        }}
        // prettier-ignore
        message={(
          <InfoWrapper id='message-id'>
            {props.status === 'success' ?
              <CheckCircleIcon /> :
              <ErrorIcon />
            }
            {props.message}
          </InfoWrapper>
        )}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={props.handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
}
