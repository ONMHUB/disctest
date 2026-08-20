export default function EtapaIdentificacao({ dadosUser, setDadosUser, onAvancar, erro }) {
    return (
        <form onSubmit={onAvancar} className="space-y-5 animate-fade-in">
            <div className="bg-pink-50/50 border border-pink-100 p-4 rounded-2xl text-xs text-slate-600 leading-relaxed">
                👋 Olá! Este questionário foi desenhado para entender seu estilo natural de trabalho na <strong>Maria Charmosa</strong>. Responda com sinceridade, pensando no seu dia a dia na loja. Não há respostas certas ou erradas.
            </div>

            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Nome Completo</label>
                <input 
                    type="text" 
                    value={dadosUser.nome} 
                    onChange={e => setDadosUser({...dadosUser, nome: e.target.value})} 
                    placeholder="Digite seu nome completo"
                    className="w-full border border-slate-200 bg-slate-50/50 rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition" 
                    required 
                />
            </div>

            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Função / Cargo</label>
                <input 
                    type="text" 
                    value={dadosUser.cargo} 
                    onChange={e => setDadosUser({...dadosUser, cargo: e.target.value})} 
                    placeholder="Ex: Consultora de Vendas, Caixa..."
                    className="w-full border border-slate-200 bg-slate-50/50 rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition" 
                    required 
                />
            </div>

            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Setor Principal</label>
                <select 
                    value={dadosUser.setor} 
                    onChange={e => setDadosUser({...dadosUser, setor: e.target.value})} 
                    className="w-full border border-slate-200 bg-slate-50/50 rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                >
                    <option value="Vendas">Vendas</option>
                    <option value="Caixa">Caixa</option>
                    <option value="Estoque">Estoque</option>
                    <option value="Gerência">Gerência</option>
                    <option value="Apoio">Apoio</option>
                </select>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 h-28 overflow-y-auto border border-slate-200">
                <strong>Termo de Esclarecimento:</strong> Compreendo que a avaliação tem caráter de desenvolvimento profissional e organizacional, vinculada à consultoria prestada por Maxi Silva. Autorizo a aplicação e elaboração do perfil comportamental.
            </div>

            <label className="flex items-center space-x-3 text-sm cursor-pointer select-none">
                <input 
                    type="checkbox" 
                    checked={dadosUser.concordo} 
                    onChange={e => setDadosUser({...dadosUser, concordo: e.target.checked})} 
                    className="rounded text-pink-600 focus:ring-pink-500 w-5 h-5 border-slate-300" 
                />
                <span className="font-medium text-slate-700">Li e concordo com os termos de aplicação.</span>
            </label>

            {erro && <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-xl text-center font-medium">{erro}</div>}

            <button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-pink-600/20 transition duration-200 transform active:scale-[0.99]">
                Iniciar Questionário →
            </button>
        </form>
    );
}
