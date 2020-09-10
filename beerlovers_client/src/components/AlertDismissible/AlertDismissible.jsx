import React from 'react'
import { Alert } from "react-bootstrap"

export default function AlertDismissible(props) {
  const { show, setShow} = props
  // const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant="danger" onClick={() => setShow(false)} dismissible>
        <Alert.Heading>Important Message</Alert.Heading>
        <p>
          {props.children}
        </p>
      </Alert>
    );
  }
  return <div></div>;
}
