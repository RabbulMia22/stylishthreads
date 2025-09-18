"use client";

import { useState, useRef } from "react";
import { upload, ImageKitUploadNetworkError, ImageKitInvalidRequestError, ImageKitAbortError } from "@imagekit/next";
import axios from "axios";

interface UseImageUploadReturn {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  progress: number;
  uploadedUrl: string;
  handleUpload: () => Promise<void>;
}

export const useImageUpload = (): UseImageUploadReturn => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleUpload = async () => {
    if (!fileInputRef.current?.files?.length) return alert("Select a file");
    const file = fileInputRef.current.files[0];

    // Get auth params from your server
    const res = await axios.get("/api/imagekit-auth");
    const auth = res.data;

    try {
      const response = await upload({
        file,
        fileName: file.name,
        signature: auth.signature,
        expire: auth.expire,
        token: auth.token,
        publicKey: auth.publicKey,
        onProgress: (e) => setProgress((e.loaded / e.total) * 100),
      });
      setUploadedUrl(response.url as string);
      console.log("Uploaded URL:", response.url);
    } catch (error) {
      if (error instanceof ImageKitAbortError) console.error("Upload aborted:", error.reason);
      else if (error instanceof ImageKitInvalidRequestError) console.error("Invalid request:", error.message);
      else if (error instanceof ImageKitUploadNetworkError) console.error("Network error:", error.message);
      else console.error("Upload failed:", error);
    }
  };

  return { fileInputRef, progress, uploadedUrl, handleUpload,  };
};
