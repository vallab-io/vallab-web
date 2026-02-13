import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Instagram, Coffee, ArrowUpRight, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-10 lg:p-14">
      <div className="max-w-2xl mx-auto flex flex-col gap-10">
        {/* 1. 프로필 이미지 */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
            <Image
              src="/profile.png"
              alt="Vallab 프로필"
              fill
              className="object-cover"
              sizes="128px"
              priority
            />
          </div>
        </div>

        {/* 2. Vallab + 서브타이틀 + 상세 소개 */}
        <div className="text-center space-y-5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Vallab</h1>
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            단순히 서비스를 만들어드리는 것이 아닌 <strong className="font-semibold text-gray-700">가치</strong>를 만듭니다
          </p>
        </div>

        <div className="mx-auto max-w-lg space-y-5 text-base leading-relaxed text-gray-700">
          <p>
            Vallab은 <strong>Value</strong>와 <strong>Laboratory</strong>의 합성어로, 실험실처럼 끊임없이 연구하고 실험하며{' '}
            <strong>최고의 가치</strong>를 만들어냅니다.
          </p>
          <p>
            창작자를 위한 뉴스레터 SaaS 서비스인 <strong>Vality</strong>를 개발하고 있으며,
            다양한 외주 프로젝트를 통해 고객에게 <strong>진정한 가치</strong>를 제공하고 있습니다.
          </p>
        </div>

        {/* 4. Connect With Me - 카드 형태 (참고 이미지 스타일) */}
        <div className="mx-auto w-full max-w-lg">
        <Card className="p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-5">
            Connect With Me
          </h2>
          <div className="flex gap-4">
            <Link
              href="mailto:jihoi.kang@vallab.io"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/jihoi-kang"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jihoi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:bg-[#004182] transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/aloha.jihoi/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#E4405F] flex items-center justify-center text-white hover:bg-[#d62d4a] transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </Card>
        </div>

        {/* ---- 카드 섹션 ---- */}
        <div className="mx-auto w-full max-w-lg flex flex-col gap-4 pt-1">
          {/* Vality 카드 */}
          <Card className="group hover:shadow-lg transition-shadow overflow-hidden rounded-2xl">
            <Link
              href="https://vality.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6"
            >
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src="/vality-logo.svg"
                  alt="Vality"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-1.5 text-gray-900 leading-snug">Vality</h3>
                <p className="text-sm text-gray-600">개인 창작자가 뉴스레터를 쉽게 만들고 운영할 수 있도록 돕습니다</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
            </Link>
          </Card>

          {/* 외주 개발 카드 - Tally 팝업 */}
          <Card className="group hover:shadow-lg transition-shadow overflow-hidden rounded-2xl">
            <button
              type="button"
              className="flex w-full items-center gap-4 p-6 text-left transition-colors hover:bg-gray-50/50"
              data-tally-open="KYlNxA"
              data-tally-layout="modal"
              data-tally-width="840"
            >
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-violet-700" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-1.5 text-gray-900 leading-snug">외주 개발</h3>
                <p className="text-sm text-gray-600">프로젝트 문의 · 견적 요청 · MVP 제품</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
            </button>
          </Card>

          {/* Blog 카드 - profile-me.png와 함께 */}
          <Card className="group hover:shadow-lg transition-shadow overflow-hidden rounded-2xl">
            <Link
              href="https://log.vallab.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src="/profile-me.png"
                  alt="Blog"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-1.5 text-gray-900 leading-snug">블로그</h3>
              </div>
              <ArrowUpRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
            </Link>
          </Card>

          {/* 커피챗 카드 */}
          <Card className="group hover:shadow-lg transition-shadow overflow-hidden rounded-2xl">
            <Link
              href="https://www.latpeed.com/products/sycBp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6"
            >
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Coffee className="h-6 w-6 text-amber-700" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-1.5 text-gray-900 leading-snug">커피챗</h3>
              </div>
              <ArrowUpRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
            </Link>
          </Card>

        </div>
      </div>
    </main>
  );
}
