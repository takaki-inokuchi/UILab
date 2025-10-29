"use client";

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";
import styles from "./page.module.css"


export default function PostBody({ content }: { content: string }) {
  useEffect(() => {
    hljs.highlightAll(); 
  }, []);

  return (
    <article
       className={`${styles.post} prose prose-zinc`} 
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
