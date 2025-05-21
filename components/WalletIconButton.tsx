"use client";

import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { ethereum } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: "b194a2ccabb931616f31aaa2c72a88d8",
});

export default function WalletIconButton() {
  return (
    <ConnectButton
      client={client}
      chain={ethereum}
      connectButton={{
        style: {
          fontSize: "0.8rem",
          padding: "2px 8px",
          minHeight: "28px",
          minWidth: "80px",
        },
      }}
    />
  );
}
