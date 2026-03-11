import Header from './components/Header'

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl">
        <Header />
        <section className="space-y-3 text-slate-300">
          <p>这是 AI Earbuds Demo 的前端骨架。</p>
          <p>后续可在此接入设备状态、语音助手、音乐控制、降噪模式等业务模块。</p>
        </section>
      </div>
    </main>
  )
}
