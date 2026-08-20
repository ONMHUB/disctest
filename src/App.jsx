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

    // Calcular progresso do questionário
    const gruposPreenchidos = respostas.filter(g => g.A && g.B && g.C && g.D).length;
    const progressoPct = Math.round((gruposPreenchidos / 24) * 100);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-pink-100 p-6 sm:p-8 md:p-10 transition-all duration-300">
                
                {/* Header Institucional */}
                <header className="text-center mb-8 pb-4 border-b border-gray-100">
                    <span className="inline-block bg-brand-50 text-brand-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                        Maria Charmosa · Consultoria Maxi Silva
                    </span>
                    <h1 className="text-xs text-gray-400 mt-2 tracking-wide uppercase">Avaliação de Perfil Comportamental DISC</h1>
                </header>

                {/* Barra de Progresso (Visível apenas na Etapa 2) */}
                {etapa === 2 && (
                    <div className="mb-6 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1.5">
                            <span>Progresso do Questionário</span>
                            <span>{gruposPreenchidos} de 24 grupos ({progressoPct}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div className="bg-brand-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progressoPct}%` }}></div>
                        </div>
                    </div>
                )}

                {/* Conteúdo das Etapas */}
                <section>
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
                </section>
            </div>

            {/* Rodapé discreto */}
            <footer className="mt-6 text-center text-xs text-brand-700/70 font-medium">
                © Maria Charmosa — Desenvolvimento de Equipe e Performance no Varejo
            </footer>
        </main>
    );
}
