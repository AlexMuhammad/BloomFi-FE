import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { cookieStorage, createStorage, http } from "wagmi";
import { arbitrumSepolia, baseSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "BloomFi",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "123",
  chains: [
    {
      ...arbitrumSepolia,
      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjv1BCz9c0XJqNX7QdhdoP2Te1d5WBlHDNf6E4Ja7ELh2eCVherSXHhraFVvWYK8msubY&usqp=CAU",
    },
    {
      ...baseSepolia,
      iconUrl:
        "https://developers.moralis.com/wp-content/uploads/2022/12/Base-Logo-Blue.svg",
    },
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [arbitrumSepolia.id]: http(),
    [baseSepolia.id]: http(),
  },
});
