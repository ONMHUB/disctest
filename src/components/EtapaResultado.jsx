import { descricoesPerfis } from '../data/discData';

export default function EtapaResultado({ resultado, onReiniciar }) {
    if (!resultado) return null;

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="text-center bg-emerald-50 border border-emerald-100 p-4 rounded-2xl text-emerald-800">
                <span className="text-2xl">🎉</span>
                <h3 className="font-bold text-base mt-1">Avaliação Concluída com Sucesso!</h3>
                <p className="text-xs text-emerald-600">O mapeamento comportamental foi processado.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-sm flex justify-between items-center">
                <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Colaborador(a)</p>
                    <p className="font-bold text-slate-800 text-base">{resultado.usuario.nome}</p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-slate-400 uppercase font-bold">Função / Setor</p>
                    <p className="font-semibold text-slate-700">{resultado.usuario.cargo} · <span className="text-pink-600">{resultado.usuario.setor}</span></p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border-2 border-pink-500/30 p-5 rounded-2xl shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Primário</div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Perfil Principal</span>
                    <p className="text-2xl font-black text-pink-600 mt-1">{resultado.primario.nome}</p>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">Pontuação: {resultado.primario.soma} pts</p>
                </div>

                <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Secundário</div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Perfil de Apoio</span>
                    <p className="text-2xl font-black text-purple-700 mt-1">{resultado.secundario.nome}</p>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">Pontuação: {resultado.secundario.soma} pts</p>
                </div>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-4">
                <h4 className="font-bold text-sm text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">Gráfico de Distribuição DISC</h4>
                {resultado.pontuacoes.map(p => {
                    const pct = ((p.soma / 96) * 100).toFixed(1);
                    return (
                        <div key={p.letra} className="text-xs space-y-1">
                            <div className="flex justify-between font-bold text-slate-700">
                                <span>{p.nome} ({p.letra})</span>
                                <span className="text-pink-600">{p.soma} pts ({pct}%)</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200">
                                <div className="bg-gradient-to-r from-pink-500 to-rose-600 h-full rounded-full transition-all duration-700" style={{ width: `${pct}%` }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="bg-pink-50/60 border border-pink-100 p-5 rounded-2xl space-y-3 text-sm text-slate-700">
                <h4 className="font-bold text-pink-900 uppercase text-xs tracking-wider">Análise Qualitativa para a Loja</h4>
                <div className="space-y-2 text-xs leading-relaxed">
                    <p className="bg-white p-3 rounded-xl border border-pink-100 shadow-sm">🔹 {descricoesPerfis[resultado.primario.letra]}</p>
                    <p className="bg-white p-3 rounded-xl border border-pink-100 shadow-sm">🔸 {descricoesPerfis[resultado.secundario.letra]}</p>
                </div>
            </div>

            <button onClick={onReiniciar} className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition duration-200">
                ↺ Refazer Avaliação / Novo Colaborador
            </button>
        </div>
    );
}
