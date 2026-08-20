import { perguntas } from '../data/discData';

export default function EtapaQuestionario({ respostas, onRespostaChange, onFinalizar, erro }) {
    return (
        <div className="animate-fade-in space-y-6">
            <div className="bg-pink-50/50 border border-pink-100 p-4 rounded-2xl text-xs text-slate-600 text-center">
                Instrução: Em cada grupo, numere de <strong>1 a 4</strong> (use cada número <strong>uma única vez</strong>):<br/>
                <span className="inline-block mt-1"><strong>4</strong> = Mais combina | <strong>3</strong> = Bastante | <strong>2</strong> = Pouco | <strong>1</strong> = Menos combina</span>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {perguntas.map((grupo, gIndex) => (
                    <div key={gIndex} className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm hover:border-pink-200 transition">
                        <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                            <span className="font-bold text-xs uppercase tracking-wider text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md">Grupo {gIndex + 1} de 24</span>
                        </div>
                        <div className="space-y-3">
                            {grupo.map((item) => (
                                <div key={item.letra} className="flex items-center justify-between gap-4 text-sm bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                                    <span className="flex-1 text-slate-700 leading-snug"><strong className="text-pink-600 mr-1">[{item.letra}]</strong> {item.texto}</span>
                                    <select 
                                        value={respostas[gIndex][item.letra]} 
                                        onChange={(e) => onRespostaChange(gIndex, item.letra, e.target.value)}
                                        className="border border-slate-300 rounded-lg p-2 w-20 text-center font-bold bg-white text-pink-600 focus:ring-2 focus:ring-pink-500 outline-none shadow-sm"
                                    >
                                        <option value="">-</option>
                                        <option value="4">4</option>
                                        <option value="3">3</option>
                                        <option value="2">2</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {erro && <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-xl text-center font-medium animate-bounce">{erro}</div>}

            <button onClick={onFinalizar} className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-pink-600/20 transition duration-200 transform active:scale-[0.99]">
                Finalizar e Ver Resultado ✨
            </button>
        </div>
    );
}
