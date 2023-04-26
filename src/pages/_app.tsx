import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "@/contexts";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { MainLayout } from "@/components/Layout/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </SkeletonTheme>
    </ModalProvider>
  );
}
