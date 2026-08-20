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

    return (
        <div className="min-h-screen bg-brand-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-6 md:p-8">
                <div className="text-center mb-6">
                    <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Maria Charmosa · Consultoria Maxi Silva
                    </span>
                </div>

                {etapa === 1 && (
                    <EtapaIdentificacao 
                        dadosUser={dadosUser} 
                        setDadosUser={setDadosUser} 
                        onAvancar={(e) => { e.preventDefault(); setEtapa(2); }} 
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
            </div>
        </div>
    );
}
