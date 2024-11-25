export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section>
            {/* <nav>
                This is Dashboard Nav Bar
            </nav> */}
            {children}
        </section>
    )
  }