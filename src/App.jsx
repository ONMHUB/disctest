import { useState, useEffect } from 'react';
import EtapaIdentificacao from './components/EtapaIdentificacao';
import EtapaQuestionario from './components/EtapaQuestionario';
import EtapaResultado from './components/EtapaResultado';

export default function App() {
    const [etapa, setEtapa] = useState(1);
    const [dadosUser, setDadosUser] = useState(() => {
        const salvo = localStorage.getItem('disc_user');
        return salvo ? JSON.parse(salvo) : { nome: '', cargo: '', setor: 'Vendas', concordo: false };
    });
    const [respostas, setRespostas] = useState(() => {
        const salvo = localStorage.getItem('disc_respostas');
        return salvo ? JSON.parse(salvo) : Array(24).fill({ A: '', B: '', C: '', D: '' });
    });
    const [erro, setErro] = useState('');
    const [resultadoFinal, setResultadoFinal] = useState(() => {
        const salvo = localStorage.getItem('disc_resultado');
        return salvo ? JSON.parse(salvo) : null;
    });

    useEffect(() => {
        localStorage.setItem('disc_user', JSON.stringify(dadosUser));
    }, [dadosUser]);

    useEffect(() => {
        localStorage.setItem('disc_respostas', JSON.stringify(respostas));
    }, [respostas]);

    const handleRespostaChange = (grupoIndex, letra, valor) => {
        const novasRespostas = [...respostas];
        novasRespostas[grupoIndex] = { ...novasRespostas[grupoIndex], [letra]: valor };
        setRespostas(novasRespostas);
    };

    const finalizarTeste = () => {
        let somaD = 0, somaI = 0, somaSt = 0, somaC = 0;

        for (let i = 0; i < 24; i++) {
            const grupo = respostas[i];
            const valores = [grupo.A, grupo.B, grupo.C, grupo.D].map(v => parseInt(v));

            if (valores.some(isNaN)) {
                setErro(`Preencha todas as opções do Grupo ${i + 1}.`);
                return;
            }

            const unicos = [...new Set(valores)];
            if (unicos.length !== 4 || !valores.includes(4) || !valores.includes(3) || !valores.includes(2) || !valores.includes(1)) {
                setErro(`No Grupo ${i + 1}, use os números 4, 3, 2 e 1 exatamente uma vez cada.`);
                return;
            }

            somaD += valores[['A','B','C','D'].indexOf('A')];
            somaI += valores[['A','B','C','D'].indexOf('B')];
            somaSt += valores[['A','B','C','D'].indexOf('C')];
            somaC += valores[['A','B','C','D'].indexOf('D')];
        }

        setErro('');

        const calculo = [
            { letra: 'D', nome: 'Dominância', soma: somaD },
            { letra: 'I', nome: 'Influência', soma: somaI },
            { letra: 'S', nome: 'Estabilidade', soma: somaSt },
            { letra: 'C', nome: 'Conformidade', soma: somaC }
        ].sort((a, b) => b.soma - a.soma);

        const resFinal = {
            usuario: dadosUser,
            pontuacoes: calculo,
            primario: calculo[0],
            secundario: calculo[1]
        };

        setResultadoFinal(resFinal);
        localStorage.setItem('disc_resultado', JSON.stringify(resFinal));
        setEtapa(3);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const reiniciar = () => {
        localStorage.clear();
        setDadosUser({ nome: '', cargo: '', setor: 'Vendas', concordo: false });
        setRespostas(Array(24).fill({ A: '', B: '', C: '', D: '' }));
        setResultadoFinal(null);
        setEtapa(1);
    };

    const gruposPreenchidos = respostas.filter(g => g.A && g.B && g.C && g.D).length;
    const progressoPct = Math.round((gruposPreenchidos / 24) * 100);

    return (
        <div className="min-h-screen w-full grid place-items-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-100/80 p-6 sm:p-8 md:p-12 animate-fade-in my-auto">
                
                {/* Header de Marca */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md mb-3">
                        ✨ Maria Charmosa · Consultoria Maxi Silva
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Mapeamento DISC
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">Ferramenta de autoconhecimento e performance no varejo</p>
                </div>

                {/* Stepper / Indicador de Etapas */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${etapa === 1 ? 'bg-pink-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'}`}>
                        <span>1</span> Identificação
                    </div>
                    <div className="w-8 h-0.5 bg-slate-200"></div>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${etapa === 2 ? 'bg-pink-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'}`}>
                        <span>2</span> Questionário
                    </div>
                    <div className="w-8 h-0.5 bg-slate-200"></div>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${etapa === 3 ? 'bg-pink-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'}`}>
                        <span>3</span> Resultado
                    </div>
                </div>

                {/* Barra de Progresso do Teste */}
                {etapa === 2 && (
                    <div className="mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-inner">
                        <div className="flex justify-between text-xs font-semibold text-slate-600 mb-2">
                            <span>Progresso do Teste</span>
                            <span className="text-pink-600 font-bold">{gruposPreenchidos} de 24 grupos ({progressoPct}%)</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden p-0.5 bg-slate-100 border border-slate-200">
                            <div className="bg-gradient-to-r from-pink-500 to-rose-600 h-full rounded-full transition-all duration-500" style={{ width: `${progressoPct}%` }}></div>
                        </div>
                    </div>
                )}

                {/* Componentes Dinâmicos */}
                <main className="transition-all duration-300">
                    {etapa === 1 && (
                        <EtapaIdentificacao 
                            dadosUser={dadosUser} 
                            setDadosUser={setDadosUser} 
                            onAvancar={(e) => { e.preventDefault(); setEtapa(2); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                            erro={erro} 
                        />
                    )}

                    {etapa === 2 && (
                        <EtapaQuestionario 
                            respostas={respostas} 
                            onRespostaChange={handleRespostaChange} 
                            onFinalizar={finalizarTeste} 
                            erro={erro} 
                        />
                    )}

                    {etapa === 3 && (
                        <EtapaResultado 
                            resultado={resultadoFinal} 
                            onReiniciar={reiniciar} 
                        />
                    )}
                </main>

                {/* Rodapé Interno */}
                <footer className="mt-10 pt-6 border-t border-slate-100 text-center text-xs text-slate-400 font-medium">
                    © Maria Charmosa · Uso interno sob consultoria Maxi Silva
                </footer>
            </div>
        </div>
    );
}
