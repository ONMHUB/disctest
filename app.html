<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DISC — Maria Charmosa</title>
    <!-- Tailwind CSS para estilização rápida e moderna -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: { 50: '#fce4ec', 500: '#c2185b', 600: '#ad1457', 700: '#880e4f' }
                    }
                }
            }
        }
    </script>
    <!-- React e ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Babel para compilar JSX no browser -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body class="bg-brand-50 min-h-screen text-slate-800 flex items-center justify-center p-4">

    <div id="root" class="w-full max-w-2xl"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        const perguntas = [
            // 24 Grupos do DISC (A, B, C, D)
            [
                { letra: 'A', texto: 'Gosto de assumir a frente e tomar decisões com rapidez.' },
                { letra: 'B', texto: 'Consigo animar o ambiente e me conectar facilmente com as pessoas.' },
                { letra: 'C', texto: 'Prefiro manter a calma e a estabilidade, sem grandes mudanças bruscas.' },
                { letra: 'D', texto: 'Prezo por precisão, organização e fazer as coisas do jeito certo.' }
            ],
            [
                { letra: 'A', texto: 'Encaro desafios de frente e não fujo de confrontos quando necessário.' },
                { letra: 'B', texto: 'Consigo convencer e influenciar os outros com facilidade.' },
                { letra: 'C', texto: 'Sou paciente e sei esperar o momento certo para agir.' },
                { letra: 'D', texto: 'Analiso os detalhes antes de me comprometer com uma decisão.' }
            ],
            [
                { letra: 'A', texto: 'Tenho foco em resultado e gosto de bater metas.' },
                { letra: 'B', texto: 'Gosto de ser reconhecido(a) e de trabalhar em clima leve e positivo.' },
                { letra: 'C', texto: 'Valorizo harmonia no time e evito conflitos desnecessários.' },
                { letra: 'D', texto: 'Sigo padrões, regras e processos com disciplina.' }
            ],
            [
                { letra: 'A', texto: 'Sou direto(a) e objetivo(a) na comunicação.' },
                { letra: 'B', texto: 'Expresso entusiasmo e empolgo as pessoas ao meu redor.' },
                { letra: 'C', texto: 'Sou constante, leal e confiável no dia a dia.' },
                { letra: 'D', texto: 'Prefiro basear minhas ações em fatos, números e critérios claros.' }
            ],
            [
                { letra: 'A', texto: 'Gosto de controle sobre as situações e de definir o rumo.' },
                { letra: 'B', texto: 'Faço amizades com facilidade e crio rapport rápido com clientes.' },
                { letra: 'C', texto: 'Trabalho bem em ritmo estável e previsível.' },
                { letra: 'D', texto: 'Reviso o trabalho para evitar erros e retrabalho.' }
            ],
            [
                { letra: 'A', texto: 'Tomo iniciativa mesmo quando ninguém pediu.' },
                { letra: 'B', texto: 'Uso criatividade e carisma para engajar quem está na loja.' },
                { letra: 'C', texto: 'Ofereço suporte ao time e gosto de colaborar nos bastidores.' },
                { letra: 'D', texto: 'Exijo qualidade elevada de mim e dos processos.' }
            ],
            [
                { letra: 'A', texto: 'Sob pressão, acelero e quero resolver logo.' },
                { letra: 'B', texto: 'Sob pressão, busco apoio nas pessoas e mantenho o otimismo.' },
                { letra: 'C', texto: 'Sob pressão, tento manter a tranquilidade e não precipitar.' },
                { letra: 'D', texto: 'Sob pressão, fico mais atento(a) aos detalhes para não errar.' }
            ],
            [
                { letra: 'A', texto: 'Prefiro metas claras e autonomia para executar.' },
                { letra: 'B', texto: 'Prefiro ambientes sociais, dinâmicos e com troca constante.' },
                { letra: 'C', texto: 'Prefiro segurança, rotina bem definida e relacionamento estável.' },
                { letra: 'D', texto: 'Prefiro instruções precisas, padrões e critérios objetivos.' }
            ],
            [
                { letra: 'A', texto: 'Dizem que sou competitivo(a) e determinado(a).' },
                { letra: 'B', texto: 'Dizem que sou comunicativo(a) e persuasivo(a).' },
                { letra: 'C', texto: 'Dizem que sou calmo(a) e acolhedor(a).' },
                { letra: 'D', texto: 'Dizem que sou cuidadoso(a) e perfeccionista.' }
            ],
            [
                { letra: 'A', texto: 'Não gosto de perder tempo com conversas longas sem objetivo.' },
                { letra: 'B', texto: 'Não gosto de ambientes frios, silenciosos demais ou sem energia.' },
                { letra: 'C', texto: 'Não gosto de mudanças constantes sem preparo.' },
                { letra: 'D', texto: 'Não gosto de improviso sem método ou de “jeitinho” que gera erro.' }
            ],
            [
                { letra: 'A', texto: 'Na dúvida, decido e ajusto depois se precisar.' },
                { letra: 'B', texto: 'Na dúvida, converso com as pessoas para sentir o clima.' },
                { letra: 'C', texto: 'Na dúvida, espero ter mais segurança antes de mudar.' },
                { letra: 'D', texto: 'Na dúvida, busco mais informação e verifico os detalhes.' }
            ],
            [
                { letra: 'A', texto: 'Me motivo com desafios, conquistas e resultados visíveis.' },
                { letra: 'B', texto: 'Me motivo com reconhecimento, interação e ambiente animado.' },
                { letra: 'C', texto: 'Me motivo com estabilidade, confiança do time e bom relacionamento.' },
                { letra: 'D', texto: 'Me motivo com excelência, acerto e trabalho bem feito.' }
            ],
            [
                { letra: 'A', texto: 'Em uma discussão, defendo meu ponto com firmeza.' },
                { letra: 'B', texto: 'Em uma discussão, tento aliviar o clima e buscar acordo social.' },
                { letra: 'C', texto: 'Em uma discussão, evito escalar e prefiro paz no ambiente.' },
                { letra: 'D', texto: 'Em uma discussão, trago fatos e argumentos lógicos.' }
            ],
            [
                { letra: 'A', texto: 'Gosto de liderar situações e puxar o ritmo da equipe.' },
                { letra: 'B', texto: 'Gosto de ser o(a) “cartão de visitas” e receber bem as pessoas.' },
                { letra: 'C', texto: 'Gosto de ser a pessoa em quem o time pode confiar sempre.' },
                { letra: 'D', texto: 'Gosto de ser referência em organização e padrão de qualidade.' }
            ],
            [
                { letra: 'A', texto: 'Aceito riscos calculados se o retorno valer a pena.' },
                { letra: 'B', texto: 'Aceito novidades se envolverem pessoas, ideias e movimento.' },
                { letra: 'C', texto: 'Prefiro o conhecido e o que já funciona bem.' },
                { letra: 'D', texto: 'Aceito mudanças se forem bem planejadas e justificadas.' }
            ],
            [
                { letra: 'A', texto: 'Me incomoda a lentidão e a falta de atitude.' },
                { letra: 'B', texto: 'Me incomoda o isolamento e a falta de entusiasmo.' },
                { letra: 'C', texto: 'Me incomoda a agressividade e a pressão excessiva.' },
                { letra: 'D', texto: 'Me incomoda a desorganização e a falta de critério.' }
            ],
            [
                { letra: 'A', texto: 'No atendimento, vou direto ao que a cliente precisa resolver.' },
                { letra: 'B', texto: 'No atendimento, crio conversa, conexão e experiência agradável.' },
                { letra: 'C', texto: 'No atendimento, sou atencioso(a), paciente e acolhedor(a).' },
                { letra: 'D', texto: 'No atendimento, explico detalhes do produto, tamanho, tecido e cuidado.' }
            ],
            [
                { letra: 'A', texto: 'Fecho a venda com objetividade e senso de urgência quando faz sentido.' },
                { letra: 'B', texto: 'Fecho a venda contando histórias, elogiando o look e gerando desejo.' },
                { letra: 'C', texto: 'Fecho a venda com segurança, sem pressionar a cliente.' },
                { letra: 'D', texto: 'Fecho a venda depois de garantir que a escolha está correta e alinhada.' }
            ],
            [
                { letra: 'A', texto: 'Organizo prioridades pela importância e pelo resultado.' },
                { letra: 'B', texto: 'Organizo o dia conforme as interações e o movimento da loja.' },
                { letra: 'C', texto: 'Organizo o dia com rotina estável e tarefas bem distribuídas.' },
                { letra: 'D', texto: 'Organizo o dia com listas, checagens e controle de pendências.' }
            ],
            [
                { letra: 'A', texto: 'Meu ponto forte é fazer acontecer.' },
                { letra: 'B', texto: 'Meu ponto forte é relacionar e inspirar.' },
                { letra: 'C', texto: 'Meu ponto forte é manter a constância e o suporte.' },
                { letra: 'D', texto: 'Meu ponto forte é garantir qualidade e padrão.' }
            ],
            [
                { letra: 'A', texto: 'Quando a loja está cheia, assumo o controle e priorizo o que gera resultado.' },
                { letra: 'B', texto: 'Quando a loja está cheia, mantenho a energia alta e o clima acolhedor.' },
                { letra: 'C', texto: 'Quando a loja está cheia, ajudo o time a não se desesperar e mantenho a ordem.' },
                { letra: 'D', texto: 'Quando a loja está cheia, fico atento(a) para não errar troca, tamanho ou caixa.' }
            ],
            [
                { letra: 'A', texto: 'Prefiro feedback direto, claro e sem rodeios.' },
                { letra: 'B', texto: 'Prefiro feedback com reconhecimento e tom positivo.' },
                { letra: 'C', texto: 'Prefiro feedback gentil, com tempo para assimilar.' },
                { letra: 'D', texto: 'Prefiro feedback com exemplos concretos e critérios objetivos.' }
            ],
            [
                { letra: 'A', texto: 'Em treinamento, quero o essencial e aplicar na hora.' },
                { letra: 'B', texto: 'Em treinamento, gosto de dinâmica, exemplos vivos e interação.' },
                { letra: 'C', texto: 'Em treinamento, gosto de ritmo tranquilo e prática guiada.' },
                { letra: 'D', texto: 'Em treinamento, gosto de material completo, regras e passo a passo.' }
            ],
            [
                { letra: 'A', texto: 'No fim do dia, me sinto bem se avancei e resolvi bastante.' },
                { letra: 'B', texto: 'No fim do dia, me sinto bem se houve boa conexão com clientes e equipe.' },
                { letra: 'C', texto: 'No fim do dia, me sinto bem se o clima ficou estável e o time unido.' },
                { letra: 'D', texto: 'No fim do dia, me sinto bem se tudo foi feito com correção e capricho.' }
            ]
        ];

        const descricoesPerfis = {
            D: "Perfil D (Dominância): Direto(a), decidido(a), orientado(a) a resultados e desafios. Focado(a) em fazer a loja acontecer e resolver com rapidez.",
            I: "Perfil I (Influência): Comunicativo(a), entusiasmado(a) e persuasivo(a). Excelente para gerar conexão, carisma e criar uma experiência leve com a cliente.",
            S: "Perfil S (Estabilidade): Paciente, leal, constante e acolhedor(a). Sustenta a harmonia do time e oferece um atendimento humanizado e sem pressões.",
            C: "Perfil C (Conformidade): Analítico(a), criterioso(a) e organizado(a). Focado(a) em padrões, qualidade, exatidão em trocas, caixa e processos."
        };

        function App() {
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
            const [resultadoFinal, setResultadoFinal] = useState(null);

            useEffect(() => {
                localStorage.setItem('disc_user', JSON.stringify(dadosUser));
            }, [dadosUser]);

            useEffect(() => {
                localStorage.setItem('disc_respostas', JSON.stringify(respostas));
            }, [respostas]);

            const handleUserChange = (e) => {
                const { name, value, type, checked } = e.target;
                setDadosUser(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
            };

            const handleRespostaChange = (grupoIndex, letra, valor) => {
                const novasRespostas = [...respostas];
                novasRespostas[grupoIndex] = { ...novasRespostas[grupoIndex], [letra]: valor };
                setRespostas(novasRespostas);
            };

            const avancarParaTeste = (e) => {
                e.preventDefault();
                if (!dadosUser.nome.trim() || !dadosUser.cargo.trim()) {
                    setErro('Por favor, preencha seu nome e cargo.');
                    return;
                }
                if (!dadosUser.concordo) {
                    setErro('Você precisa aceitar os termos.');
                    return;
                }
                setErro('');
                setEtapa(2);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            const finalizarTeste = () => {
                // Validação e cálculo
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
                <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
                    <div className="text-center mb-6">
                        <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                            Maria Charmosa · Consultoria Maxi Silva
                        </span>
                    </div>

                    {/* ETAPA 1 */}
                    {etapa === 1 && (
                        <form onSubmit={avancarParaTeste} className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-600 text-center">Avaliação de Perfil DISC</h2>
                            <p className="text-sm text-gray-500 text-center">Identificação inicial do colaborador</p>
                            
                            <div>
                                <label className="block text-sm font-medium mb-1">Nome Completo:</label>
                                <input type="text" name="nome" value={dadosUser.nome} onChange={handleUserChange} className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Função / Cargo:</label>
                                <input type="text" name="cargo" value={dadosUser.cargo} onChange={handleUserChange} className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Setor Principal:</label>
                                <select name="setor" value={dadosUser.setor} onChange={handleUserChange} className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none">
                                    <option value="Vendas">Vendas</option>
                                    <option value="Caixa">Caixa</option>
                                    <option value="Estoque">Estoque</option>
                                    <option value="Gerência">Gerência</option>
                                    <option value="Apoio">Apoio</option>
                                </select>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600 h-28 overflow-y-auto border">
                                Compreendo que a avaliação tem caráter de desenvolvimento profissional e organizacional, vinculada à consultoria prestada por Maxi Silva. Autorizo a aplicação e elaboração do perfil comportamental.
                            </div>
                            <label className="flex items-center space-x-2 text-sm">
                                <input type="checkbox" name="concordo" checked={dadosUser.concordo} onChange={handleUserChange} className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4" />
                                <span>Li e concordo com os termos de aplicação.</span>
                            </label>

                            {erro && <p className="text-red-500 text-sm text-center font-medium">{erro}</p>}

                            <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition duration-200">
                                Iniciar Questionário
                            </button>
                        </form>
                    )}

                    {/* ETAPA 2 */}
                    {etapa === 2 && (
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
                                                        onChange={(e) => handleRespostaChange(gIndex, item.letra, e.target.value)}
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

                            <button onClick={finalizarTeste} className="w-full mt-6 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition duration-200">
                                Finalizar e Ver Resultado
                            </button>
                        </div>
                    )}

                    {/* ETAPA 3 */}
                    {etapa === 3 && resultadoFinal && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-brand-600 text-center">Resultado do Perfil</h2>
                            <div className="bg-brand-50 p-4 rounded-xl text-sm space-y-1">
                                <p><strong>Nome:</strong> {resultadoFinal.usuario.nome}</p>
                                <p><strong>Cargo:</strong> {resultadoFinal.usuario.cargo} ({resultadoFinal.usuario.setor})</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-white border p-3 rounded-xl shadow-sm">
                                    <span className="text-xs text-gray-500 uppercase font-bold">Primário</span>
                                    <p className="text-xl font-extrabold text-brand-600">{resultadoFinal.primario.nome} ({resultadoFinal.primario.soma})</p>
                                </div>
                                <div className="bg-white border p-3 rounded-xl shadow-sm">
                                    <span className="text-xs text-gray-500 uppercase font-bold">Secundário</span>
                                    <p className="text-xl font-extrabold text-purple-700">{resultadoFinal.secundario.nome} ({resultadoFinal.secundario.soma})</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-bold text-sm text-gray-700">Pontuações Gerais:</h3>
                                {resultadoFinal.pontuacoes.map(p => {
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
                                <p>{descricoesPerfis[resultadoFinal.primario.letra]}</p>
                                <p>{descricoesPerfis[resultadoFinal.secundario.letra]}</p>
                            </div>

                            <button onClick={reiniciar} className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition duration-200">
                                Refazer / Novo Cadastro
                            </button>
                        </div>
                    )}
                </div>
            );
        }

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>
