"use client";
import React from "react";
import Image from "next/image";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import backgroundImg from "./_assets/images/background.png";
import "./globals.css";
import classes from "./page.module.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>
          <Image className={classes.img} src={backgroundImg} alt="img" fill />
          <div className="wrapper">{children}</div>
        </body>
        <ReactQueryDevtools />
      </html>
    </QueryClientProvider>
  );
}
