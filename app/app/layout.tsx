import './globals.css'

export const metadata = {
  title: '黃絕GPT',
  description: 'AI Assistant',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-HK">
      <body>{children}</body>
    </html>
  )
}
