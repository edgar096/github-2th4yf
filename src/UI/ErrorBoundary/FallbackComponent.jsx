import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { useState } from 'react';
const FallbackComponent = () => {
  const [close, setClose] = useState(true);
  const handleCloseButton = () => {
    setClose(false);
  };
  return (
    <>
      {close ? (
        <Alert
          icon={<IconAlertCircle size="1rem" />}
          title="Invalid Location!"
          color="red"
          withCloseButton
          onClose={handleCloseButton}
        >
          Enter a valid Location
        </Alert>
      ) : (
        <></>
      )}
    </>
  );
};

export default FallbackComponent;
