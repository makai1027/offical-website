export default function pageSection({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full text-center">
      <div className="w-full sm:576px md:w-640px lg:w-960px xl:w-1140px 2xl:w-1280px">
        <div className="bg-blue w-full h-320px">
          {children}
        </div>
      </div>
    </div>
  )
}
