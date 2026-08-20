import { descricoesPerfis } from '../data/discData';

export default function EtapaResultado({ resultado, onReiniciar }) {
    if (!resultado) return null;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-600 text-center">Resultado do Perfil</h2>
            <div className="bg-brand-50 p-4 rounded-xl text-sm space-y-1">
                <p><strong>Nome:</strong> {resultado.usuario.nome}</p>
                <p><strong>Cargo:</strong> {resultado.usuario.cargo} ({resultado.usuario.setor})</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white border p-3 rounded-xl shadow-sm">
                    <span className="text-xs text-gray-500 uppercase font-bold">Primário</span>
                    <p className="text-xl font-extrabold text-brand-600">{resultado.primario.nome} ({resultado.primario.soma})</p>
                </div>
                <div className="bg-white border p-3 rounded-xl shadow-sm">
                    <span className="text-xs text-gray-500 uppercase font-bold">Secundário</span>
                    <p className="text-xl font-extrabold text-purple-700">{resultado.secundario.nome} ({resultado.secundario.soma})</p>
                </div>
            </div>

            <div className="space-y-3">
                <h3 className="font-bold text-sm text-gray-700">Pontuações Gerais:</h3>
                {resultado.pontuacoes.map(p => {
                    const pct = ((p.soma / 96) * 100).toFixed(1);
                    return (
                        <div key={p.letra} className="text-xs">
                            <div className="flex justify-between mb-1 font-medium">
                                <span>{p.nome} ({p.letra})</span>
                                <span>{p.soma} pts ({pct}%)</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                                <div className="bg-brand-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${pct}%` }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="bg-slate-50 border p-4 rounded-xl space-y-3 text-sm">
                <h4 className="font-bold text-brand-700">Análise de Perfil:</h4>
                <p>{descricoesPerfis[resultado.primario.letra]}</p>
                <p>{descricoesPerfis[resultado.secundario.letra]}</p>
            </div>

            <button onClick={onReiniciar} className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition duration-200">
                Refazer / Novo Cadastro
            </button>
        </div>
    );
}
