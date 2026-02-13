"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export function ShareButton() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Vallab",
        text: "가치를 만드는 실험실",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("링크가 클립보드에 복사되었습니다!");
    }
  };

  return (
    <Button
      variant="outline"
      className="w-full justify-start gap-3 h-12"
      onClick={handleShare}
    >
      <Share2 className="h-5 w-5" />
      <span>공유하기</span>
    </Button>
  );
}
