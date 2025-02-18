function pageSection({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full text-center">
      <div className="w-full sm:max-w-[600px] md:max-w-[730px] lg:max-w-[972px] xl:max-w-[1200px] 2xl:max-w-[1360px] mx-auto transition-all">
        <div className="bg-sky-500 w-full h-[320px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export { pageSection }
