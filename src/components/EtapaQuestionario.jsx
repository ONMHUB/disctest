import { perguntas } from '../data/discData';

export default function EtapaQuestionario({ respostas, onRespostaChange, onFinalizar, erro }) {
    return (
        <div>
            <h2 className="text-xl font-bold text-brand-600 text-center mb-1">Questionário DISC</h2>
            <p className="text-xs text-gray-500 text-center mb-6">Em cada grupo, numere de <strong>1 a 4</strong> (use cada número uma única vez por grupo).</p>

            <div className="space-y-6">
                {perguntas.map((grupo, gIndex) => (
                    <div key={gIndex} className="bg-slate-50 border p-4 rounded-xl">
                        <h3 className="font-semibold text-sm text-brand-700 mb-3">Grupo {gIndex + 1} de 24</h3>
                        <div className="space-y-3">
                            {grupo.map((item) => (
                                <div key={item.letra} className="flex items-center justify-between gap-4 text-sm">
                                    <span className="flex-1"><strong>[{item.letra}]</strong> {item.texto}</span>
                                    <select 
                                        value={respostas[gIndex][item.letra]} 
                                        onChange={(e) => onRespostaChange(gIndex, item.letra, e.target.value)}
                                        className="border rounded p-1.5 w-16 text-center font-bold bg-white"
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

            {erro && <p className="text-red-500 text-sm text-center font-medium my-4">{erro}</p>}

            <button onClick={onFinalizar} className="w-full mt-6 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition duration-200">
                Finalizar e Ver Resultado
            </button>
        </div>
    );
}
