"use client";

import { useState, useCallback } from "react";

export function useClipboard(timeout: number = 2000) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = useCallback((text: string) => {
    if (!navigator.clipboard) {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), timeout);
      } catch (err) {
        console.error("Fallback copy failed", err);
      }
      document.body.removeChild(textArea);
      return;
    }

    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), timeout);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  }, [timeout]);

  return { copiedText, copy, isCopied: (text: string) => copiedText === text };
}
