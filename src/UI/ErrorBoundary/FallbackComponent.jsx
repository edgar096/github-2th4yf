import { Alert } from '@mantine/core';
//import { IconAlertCircle } from '@tabler-icons-react';
const FallbackComponent = () => {
  return (
    <Alert title="Error" color="red" withCloseButton>
      Invalid Location
    </Alert>
  );
};

export default FallbackComponent;
