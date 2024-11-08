import React, { useEffect, useRef } from "react";

const LiveStream = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const server = "http://192.168.59.193:8000";

  useEffect(() => {
    const fetchStream = async () => {
      try {
        const response = await fetch(`${server}/api/stream/1/`, {
          method: "GET",
          headers: {
            "Content-Type": "multipart/x-mixed-replace; boundary=frame",
          },
        });

        if (!response.ok || !response.body) {
          console.error("Stream request failed.");
          return;
        }

        const reader = response.body.getReader();
        let buffer = new Uint8Array();

        const processStream = async () => {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            if (value) {
              // ترکیب داده‌های جدید با داده‌های قبلی
              buffer = new Uint8Array([...buffer, ...value]);

              // شناسایی فریم‌ها با مرز تعیین شده
              const boundary = "--frame";
              const boundaryText = new TextEncoder().encode(boundary);
              let boundaryIndex = buffer.indexOf(boundaryText[0]);

              while (boundaryIndex !== -1) {
                const frameData = buffer.slice(0, boundaryIndex);
                buffer = buffer.slice(boundaryIndex + boundaryText.length);

                if (frameData.length > 0) {
                  // تبدیل فریم به Blob و نمایش آن در <img>
                  const blob = new Blob([frameData], { type: "image/jpeg" });
                  const imageUrl = URL.createObjectURL(blob);

                  if (imgRef.current) {
                    imgRef.current.src = imageUrl;
                  }
                }
                boundaryIndex = buffer.indexOf(boundaryText[0]);
              }
            }
          }
        };

        processStream();
      } catch (error) {
        console.error("Error fetching stream:", error);
      }
    };

    fetchStream();
  }, [server]);

  return (
    <div>
      <img ref={imgRef} alt="Live Stream" width="100%" />
    </div>
  );
};

export default LiveStream;
